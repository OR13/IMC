console.log('library')

const IMAGE_MAP = {
    ARCTIC: './images/arctic.jpg',
    DESERT: './images/desert.jpg',
    FIELDS: './images/golden_fields.jpg',
    MOUNTAINS: './images/mountain_top.jpg',
    OCEAN: './images/ocean.jpg',
    PINE_FOREST: './images/pine_tree.jpg',
    RAIN_FOREST: './images/rain_forest.jpg',
    SEA_SHORE: './images/sea_shore.jpg',
}

const select  = function(key){
    console.log(key)
}

const makeImageCell = function(key, value){
    return `<image id='${key}'class='image-cell' src='${value}' onclick='select("${key}")' />`;

}

const makeImageGrid = function(size){
    let html = '';
    let keys = Object.keys(IMAGE_MAP);
    let key;
    let value;
    for (var i = 0; i< size; i++){
        key = keys[i]
        value = IMAGE_MAP[key]
        html += makeImageCell(key, value)
    }
    return html
}


const IMC = {
    renderChallenge: function(container_id){
        document.getElementById(container_id).innerHTML = makeImageGrid(4)
    }
}

window.IMC = IMC;