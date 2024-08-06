import React from 'react';
import {Body, Container, Head, Heading, Hr, Html, Preview, Tailwind} from "@react-email/components";
import {OrderInformation} from "@/email/components/OrderInformation";

type OrderHistoryEmailProps = {
    orders: {
        id: string;
        pricePaidInCents: number;
        createdAt: Date;
        downloadVerificationId: string;
        product: {
            name: string;
            imagePath: string;
            description: string;
        }
    }[]
}

OrderHistoryEmail.PreviewProps = {
    orders: [
        {
            id: crypto.randomUUID(),
            createdAt: new Date(),
            pricePaidInCents: 10000,
            downloadVerificationId: crypto.randomUUID(),
            product: {
                name: 'Product Name',
                description: 'Some description',
                imagePath: '/products/babade96-35ca-4c45-9c8c-ab5b90e844dc-WhatsApp Image 2024-05-05 at 12.35.33 PM.jpeg'
            },
        },
        {
            id: crypto.randomUUID(),
            createdAt: new Date(),
            pricePaidInCents: 20000,
            downloadVerificationId: crypto.randomUUID(),
            product: {
                name: 'Product Name 2',
                description: 'Some other description',
                imagePath: '/products/f7731ebd-1fa9-4b6a-809b-c223ea194ad9-medical sheet.jpeg'
            },
        }
    ]
} satisfies OrderHistoryEmailProps

export default function OrderHistoryEmail({orders}: OrderHistoryEmailProps) {
    return (
        <Html>
            <Preview>Order History & Downloads</Preview>
            <Tailwind>
                <Head/>
                <Body className='font-sans bg-white'>
                    <Container className='max-w-xl'>
                        <Heading>Order History</Heading>
                        {orders.map((order, index) => (
                            <React.Fragment key={order.id}>
                                <OrderInformation
                                    key={order.id}
                                    order={order}
                                    product={order.product}
                                    downloadVerificationId={order.downloadVerificationId}
                                />
                                {index < orders.length - 1 && <Hr/>}
                            </React.Fragment>
                        ))}
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

