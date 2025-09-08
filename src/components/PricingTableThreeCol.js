// src/components/PricingTable.js
import React, { useState, useMemo, useContext, useEffect } from 'react';
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
    
    const currencyPricing = product.pricing?.[currency];
    const currentPrice = currencyPricing?.[cycle];

    const setupFeeKey = `${cycle.charAt(0)}setupfee`;
    const setupFee = currencyPricing?.[setupFeeKey] ?? '0.00';
    
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
            price: fullPriceString,
        };
        addToCart(item);
    };

    return (
<Col md={6} lg={4} className="mb-4 d-flex">
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
    // --- THIS LOGIC IS NOW MORE ROBUST ---
    const [selectedCurrency, setSelectedCurrency] = useState(null);
    const [activeCycle, setActiveCycle] = useState(null);

    const availableCycles = useMemo(() => {
        if (!products || !selectedCurrency) return [];
        const cycles = new Set();
        products.forEach(product => {
            const currencyPricing = product.pricing?.[selectedCurrency];
            if (currencyPricing && typeof currencyPricing === 'object') {
                Object.keys(currencyPricing).forEach(key => {
                    if (CYCLE_ORDER.includes(key)) {
                        const price = currencyPricing[key];
                        if (price && parseFloat(price) >= 0) { // More robust check
                            cycles.add(key);
                        }
                    }
                });
            }
        });
        return Array.from(cycles).sort((a, b) => CYCLE_ORDER.indexOf(a) - CYCLE_ORDER.indexOf(b));
    }, [products, selectedCurrency]);
    
    useEffect(() => {
        if (products && products.length > 0) {
            // Intelligently find the first product that has pricing data
            const productWithPricing = products.find(p => p.pricing && Object.keys(p.pricing).length > 0);
            if (productWithPricing) {
                // Prefer GBP, then USD, then fall back to the first available currency
                const pricingKeys = Object.keys(productWithPricing.pricing);
                const currency = pricingKeys.includes('GBP') ? 'GBP' : pricingKeys.includes('USD') ? 'USD' : pricingKeys[0];
                setSelectedCurrency(currency);
            }
        }
    }, [products]);

    useEffect(() => {
        // Set the active cycle ONLY after availableCycles has been calculated
        if (availableCycles.length > 0) {
            setActiveCycle(availableCycles[0]);
        }
    }, [availableCycles]);

    // This is the condition that shows the error message.
    if (!activeCycle || !selectedCurrency) {
        return <p className="text-center">No products with valid pricing found.</p>;
    }

    const filteredProducts = products.filter(p => {
        const price = p.pricing?.[selectedCurrency]?.[activeCycle];
        return price && parseFloat(price) >= 0;
    });

    return (
        <>
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
                        groupSlug={groupSlug}
                    />
                ))}
            </Row>
        </>
    );
};

export default PricingTable;