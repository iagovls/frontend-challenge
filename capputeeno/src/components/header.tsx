"use client"
import styled from "styled-components";
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInput, PrimaryInputWSearchIcon } from "./PrimaryInput";
import { CartIcon } from "./cartIcon";
import { CartControl } from "./cart-control";

const sairaStencilOne = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
});

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    line-height: 150%;
    font-size: 40px;
`

export function Header(props: HeaderProps) {
    return (
        <TagHeader>
            <Logo className={sairaStencilOne.className}>Capputeeno</Logo>
            <div>
                <PrimaryInputWSearchIcon placeholder="Procurando por algo?" />
                <CartControl/>
            </div>
        </TagHeader>
    )
}