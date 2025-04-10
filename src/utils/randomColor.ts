export const randomColor = () => {
    const maxColorValue: number = 200;
    const minColorValue: number = 100;

    const generateRandomValue = (
        minColorValue: number,
        maxColorValue: number
    ) => {
        return Math.floor(
            Math.random() * (maxColorValue - minColorValue + 1) + minColorValue
        );
    };
    
    const numToHex = (num: number) => {
        return num.toString(16).padStart(2, "0");
    };

    const rgb = Array.from({ length: 3 }, () =>
        generateRandomValue(minColorValue, maxColorValue)
    );

    rgb[Math.floor(Math.random() * 3)] = 255;

    const hexColor = rgb.map(numToHex).join("");

    return "#" + hexColor;
};
