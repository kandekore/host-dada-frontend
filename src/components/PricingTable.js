// src/components/PricingTable.js
import React, { useState, useMemo, useContext } from 'react';
import { Row, Col, Card, Button, Tabs, Tab } from 'react-bootstrap';
import CartContext from '../context/CartContext';
import './PricingTable.css';

const CYCLE_NAMES = {
    monthly: 'Monthly',
    quarterly: 'Quarterly',
    semiannually: 'Semi-Annually',
    annually: 'Annually',
    biennially: 'Biennially',
    triennially: 'Triennially',
};
const CYCLE_ORDER = ['monthly', 'quarterly', 'semiannually', 'annually', 'biennially', 'triennially'];

const ProductCard = ({ product, cycle, currency, groupSlug }) => {
    const { addToCart } = useContext(CartContext);
    
    // NOTE: Corrected data path to look inside the currency object
    const currencyPricing = product.pricing?.[currency];
    const currentPrice = currencyPricing?.[cycle];

    // NOTE: Corrected setup fee logic to match WHMCS format (e.g., 'msetupfee')
    const setupFeeKey = `${cycle.charAt(0)}setupfee`;
    const setupFee = currencyPricing?.[setupFeeKey] ?? '0.00';
    
    // This check is a safeguard
    if (!currentPrice || currentPrice === '-1.00') {
        return null;
    }

    const handleAddToCart = () => {
        const fullPriceString = `${currencyPricing.prefix}${currentPrice}${currencyPricing.suffix}`;
        const item = {
            id: `${product.pid}-${cycle}`,
            type: 'hosting',
            name: product.name,
            pid: product.pid,
            slug: product.slug,
            groupSlug: groupSlug,
            cycle: cycle,
            price: fullPriceString, // Use the formatted price
        };
        addToCart(item);
    };

    return (
        <Col xs={12} sm={12} md={6} lg={3} className="mb-4 d-flex">
            <Card className="h-100 text-center w-100">
                <Card.Header as="h5">{product.name}</Card.Header>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="pricing-display">
                        {currencyPricing.prefix}{currentPrice}
                        <span className="term">/{cycle.replace('ennially', '').replace('ly', '')}</span>
                    </Card.Title>
                    {setupFee !== '0.00' && <p className="text-muted">+{currencyPricing.prefix}{setupFee} Setup Fee</p>}
                    <div dangerouslySetInnerHTML={{ __html: product.description }} className="mt-3 mb-auto"/>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={handleAddToCart}>Order Now</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

const PricingTable = ({ products, groupSlug }) => {
    // NOTE: For now, we'll select the first currency found. This can be expanded to a dropdown.
    const [selectedCurrency, setSelectedCurrency] = useState(() => {
        return products?.[0] ? Object.keys(products[0].pricing)[0] : null;
    });

    const availableCycles = useMemo(() => {
        if (!products || !selectedCurrency) return [];
        const cycles = new Set();
        products.forEach(product => {
            const currencyPricing = product.pricing?.[selectedCurrency];
            if (currencyPricing && typeof currencyPricing === 'object') {
                // NOTE: Now iterating over the keys WITHIN the currency object
                Object.keys(currencyPricing).forEach(key => {
                    // We only want keys that are actual billing cycles
                    if (CYCLE_ORDER.includes(key)) {
                        const price = currencyPricing[key];
                        if (price && price !== '-1.00') {
                            cycles.add(key);
                        }
                    }
                });
            }
        });
        return Array.from(cycles).sort((a, b) => CYCLE_ORDER.indexOf(a) - CYCLE_ORDER.indexOf(b));
    }, [products, selectedCurrency]);

    const [activeCycle, setActiveCycle] = useState(availableCycles[0] || null);

    if (!activeCycle || !selectedCurrency) {
        return <p className="text-center">No products with valid pricing found.</p>;
    }

    // Filter products that have a valid price for the active currency AND cycle
    const filteredProducts = products.filter(p => {
        const price = p.pricing?.[selectedCurrency]?.[activeCycle];
        return price && price !== '-1.00';
    });

    return (
        <>
            {/* TODO: Add a currency selector here to change the `selectedCurrency` state */}
            <Tabs
                id="billing-cycle-tabs"
                activeKey={activeCycle}
                onSelect={(k) => setActiveCycle(k)}
                className="mb-4 justify-content-center"
                fill
            >
                {availableCycles.map(cycle => (
                    <Tab key={cycle} eventKey={cycle} title={CYCLE_NAMES[cycle] || cycle} />
                ))}
            </Tabs>
            <Row>
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={`${product.pid}-${activeCycle}`}
                        product={product}
                        cycle={activeCycle}
                        currency={selectedCurrency}
                        groupSlug={groupSlug} // <-- PASS IT DOWN
                    />
                ))}
            </Row>
        </>
    );
};

export default PricingTable;