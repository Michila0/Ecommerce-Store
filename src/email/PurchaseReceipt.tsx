import React from 'react';
import {Body, Container, Head, Heading, Html, Preview, Tailwind} from "@react-email/components";
import {OrderInformation} from "@/email/components/OrderInformation";

type PurchaseReceiptEmailProps = {
    product: {
        name: string;
        imagePath: string;
        description: string;
    }
    order: {
        id: string;
        createdAt: Date;
        pricePaidInCents: number;
    }
    downloadVerificationId: string;

}

PurchaseReceiptEmail.PreviewProps = {
    product: {
        name: 'Product Name',
        description: 'Some description',
        imagePath: '/products/babade96-35ca-4c45-9c8c-ab5b90e844dc-WhatsApp Image 2024-05-05 at 12.35.33 PM.jpeg'
    },
    order: {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        pricePaidInCents: 10000,
    },
    downloadVerificationId: crypto.randomUUID(),
} satisfies PurchaseReceiptEmailProps

export default function PurchaseReceiptEmail({product, order, downloadVerificationId}: PurchaseReceiptEmailProps) {
    return (
        <Html>
            <Preview>Download {product.name} and view receipt</Preview>
            <Tailwind>
                <Head/>
                <Body className='font-sans bg-white'>
                    <Container className='max-w-xl'>
                        <Heading>Purchase Receipt</Heading>
                        <OrderInformation order={order} product={product} downloadVerificationId={downloadVerificationId}/>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}

