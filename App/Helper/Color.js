const Color = () => {
    let color = ['e57373', 'F06292', 'BA68C8', '9575CD', '7986CB', '64B5F6'];
    let i = Math.floor(Math.random() * 5) + 0;
    return `#${color[i]}`;
};

export default Color;
