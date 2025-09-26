document.addEventListener('DOMContentLoaded', () => {


    const artistsData = [
        { name: 'Playboi Carti', image: './img/artista-carti.jpg'},
        { name: 'The Weeknd', image: './img/artista-abel.jpg'},
        { name: 'Djavan', image: './img/artista-djavan.jpg'},
        { name: 'Don Toliver', image: './img/artista-dontoliver.jpg'},
        { name: 'Iron Maiden', image: './img/artista-iron.jpg'},
        { name: 'Exaltasamba', image: './img/artista-exalta.jpg'}
    ];

    const albumsData =[
        { name: 'DS2', artist: 'Future',  image: './img/album-future.jpg'},
        { name: 'DS4Ever', artist: 'Gunna' , image: './img/album-gunna.jpg'},
        { name: 'We Dont Trust You', artist: 'Metro Boomin', image: './img/album-metro.jpg'},
        { name: 'Dangerous', artist: 'Michael jackson', image: './img/album-michael.jpg'},
        { name: 'Nada Como um dia após o outro', artist: 'Racionais Mcs',  image: './img/album-racionais.jpg'},
        { name: 'Jeffery', artist: 'Young Thug', image: './img/album-thug.jpg'}
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach( artist=>{
        const artistsCard = document.createElement('div')
        artistsCard.classList.add('artists-card')

        artistsCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <div>
                <p>${artist.name}</p>
                <h3>artista</h3>
            </div>
        `
        artistGrid.appendChild(artistsCard)

    })

    albumsData.forEach( album=>{
        const albumsCard = document.createElement('div')
        albumsCard.classList.add('albums-card')

        albumsCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
        <div>
            <p>${album.name}</p>
            <h3>${album.artist}</h3>
        </div>
        `

        albumsGrid.appendChild(albumsCard)

    
    })

    

})
