"use client"
import styled from "styled-components";
import { FilterByType } from "./filter-by-type";
import { FilterByPriority } from "./filter-by-priority";

interface FilterBarProps {

}

const FilterConteiner = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    padding: 0px;
    justify-content: space-between;
`

export function FilterBar(props:FilterBarProps){
    return(
        <FilterConteiner>
            <FilterByType/>
            <FilterByPriority/>
        </FilterConteiner>
    )
}