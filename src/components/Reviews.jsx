import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CardData } from '../assets/Data';
import { motion } from 'framer-motion';
import { useMotion } from '../Motion'; 

const Container = styled.div`
    margin-top: 5rem;
    padding: 0 1rem;
`;

const Title = styled(motion.h1)`
    text-align: center;
    font-size: 3.5rem;
    color: #5bd4f5;
    margin-bottom: 1rem;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

const Subtitle = styled(motion.h2)`
    text-align: center;
    font-size: 2.3rem;
    color: #5bd4f5;
    text-shadow: 0 0 1px #fff;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

const Box = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
    margin: 3rem;

    @media (max-width: 768px) {
        gap: 2rem;
        margin: 2rem;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 1.5rem;
        margin: 1rem;
    }
`;

const Card = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 37rem;
    justify-content: space-between;
    padding: 40px;
    background-color: white;
    border: 2px solid #5bd4f5;
    border-radius: 20px;
    width: 30%;

    @media (max-width: 1024px) {
        width: 45%;
    }

    @media (max-width: 768px) {
        width: 80%;
        padding: 30px;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: 20px;
        height: auto;
    }
`;

const CardContent = styled.p`
    font-size: 18px;
    line-height: 1.5;
    text-align: left;
    color: #202020;

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const User = styled.p`
    font-size: 2rem;
    margin: 1rem;
    margin-left: 4rem;
    text-align: left;
    color: #3c3b3b;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 1.8rem;
        margin-left: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
        margin-left: 1rem;
    }
`;

const Date = styled.span`
    font-size: 1.5rem;
    margin-left: 4rem;
    color: #3c3b3b;
    font-weight: bold;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 1.3rem;
        margin-left: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 1.1rem;
        margin-left: 1rem;
    }
`;

const Person = styled.div`
    display: flex;
    justify-content: center;
`;

const Icon = styled.span`
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 4rem;
    color: #202020;

    @media (max-width: 768px) {
        font-size: 3.5rem;
    }

    @media (max-width: 480px) {
        font-size: 3rem;
    }
`;

const Text = styled(motion.div)`
    width: 80%;

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const Reviews = () => {
    const motionVariants = useMotion();
    const [Num, setNum] = useState(18300);

    useEffect(() => {
        setTimeout(() => {
            setNum((prev) => prev + 1);
        }, 1200);
    }, [Num]);

    return (
        <Container>
            <Title
                variants={motionVariants.fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                {Num} Messages Sent Every second
            </Title>
            <Subtitle
                variants={motionVariants.fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                8 in 10 users find talking to MannMitra helpful and 80% report a mood improvement
            </Subtitle>
            <Box
                variants={motionVariants.fadeInLeftVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
            >
                {CardData.map((rev, index) => (
                    <Card
                        key={index}
                        variants={motionVariants.fadeInBottomVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >
                        <CardContent>{rev.review}</CardContent>
                        <Person>
                            <Icon>
                                <ion-icon name="person-circle-outline" class="icon"></ion-icon>
                            </Icon>
                            <Text
                                variants={motionVariants.fadeInLeftVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                            >
                                <User>{rev.name}</User>
                                <Date>{rev.date}</Date>
                            </Text>
                        </Person>
                    </Card>
                ))}
            </Box>
        </Container>
    );
};
