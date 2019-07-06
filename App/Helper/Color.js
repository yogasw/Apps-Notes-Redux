const Color = (id) => {

    let color = ['2FC2DF', 'FAD06C', 'C0EB6A', 'FF92A9'];

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
