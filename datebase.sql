CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    date VARCHAR(255),
    delivery VARCHAR(255),
    orderReadiness VARCHAR(255),
    paymentOfTransport VARCHAR(255),
    place VARCHAR(255),
    repairOfModernization VARCHAR(255),
    urgentRepair VARCHAR(255)
    )
