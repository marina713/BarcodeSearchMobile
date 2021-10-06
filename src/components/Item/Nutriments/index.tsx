import React from "react";
import { View } from 'react-native';
import { useSelector } from "react-redux";
import { getCurrentItem } from "../../../state/search/selectors";
import { Wrapper, NutrimentWrapper, Title, Label, LabelValue } from "./styles"

const NUTRIMENTS = [
    { key: "energy-kcal_100g", unit: "energy-kcal_unit", label: "Energy" },
    { key: "fat_100g", unit: "fat_unit", label: "Fat" },
    { key: "fsaturated-fat_100g", unit: "saturated-fat_unit", label: "Saturated fat", subCategory: true },
    { key: "carbohydrates_100g", unit: "carbohydrates_unit", label: "Carbohydrates" },
    { key: "sugars_100g", unit: "sugars_unit", label: "Sugar", subCategory: true },
    { key: "fiber_100g", unit: "fiber_unit", label: "Fiber" },
    { key: "proteins_100g", unit: "proteins_unit", label: "Proteins" },
    { key: "salt_100g", unit: "salt_unit", label: "Salt" }
];

const round = (number: number) => Math.round(number * 100) / 100

const Nutriments = () => {
    const currentItem = useSelector(getCurrentItem);
    const nutriments = currentItem.nutriments;

    return nutriments ?
        <Wrapper>
            <Title>Nutritional information (per 100g)</Title>

            {NUTRIMENTS.map((nutriment) => {
                return nutriments.hasOwnProperty(nutriment.key) ?
                    <NutrimentWrapper key={`${currentItem.code}-${nutriment.key}`}>
                        <View><Label subCategory={nutriment.subCategory}>{nutriment.label}</Label></View>
                        {/* @ts-ignore */}
                        <View><LabelValue>{`${round(nutriments[nutriment.key])} ${nutriments[nutriment.unit]}`}</LabelValue></View>
                    </NutrimentWrapper> : null
            })}
        </Wrapper> : null;
}


export default Nutriments;
