const Color = (id) => {

    let color = ['e57373', 'F06292', 'BA68C8', '9575CD', '7986CB', '64B5F6'];

    let i = '';
    switch (id) {
        case 1: {
            i = color[0];
            break;
        }
        case 2: {
            i = color[1];
            break;
        }
        case 3: {
            i = color[2];
            break;
        }
        case 4: {
            i = color[3];
            break;
        }
        case 5: {
            i = color[4];
            break;
        }
        default: {
            i = color[0];
            break;
        }
    }
    return `#${i}`;
    //let i = Math.floor(Math.random() * 5) + 0;
    //return `#${color[i]}`;
};

export default Color;
