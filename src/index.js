
const loadNews = async () => {
    try {
        const response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
        const data = await response.json();
        const news = data.posts;
        console.log(news);
        displayNews(news);
    }
    catch {
        console.log('erorrrr find');
    }

}



function handleSearch(isShowAll) {
    loaderSpinner(true);
    const searchText = document.getElementById('search-text');
    const searchValue = searchText.value;
    loadNews(searchValue, isShowAll);
}

const displayNews = (news) => {
    const getnewsCard = document.getElementById('allnews');
    getnewsCard.textContent = '';

    news.forEach(post => {
        // create div and set class
        const div = document.createElement('div');
        // loadDetails(news.slug);
        // set innerHTML
        div.innerHTML =
            `<div class="bg-slate-300 rounded-xl p-10 flex gap-4 my-3">
                        <div>
                            ${post.isActive ? `<div id="online" class="avatar online">
                                <div class="w-24 rounded-full">
                                    <img
                                        src=${post.image} />
                                </div>
                            </div>` : `
                            <div id="offline" class="avatar offline">
                                <div class="w-24 rounded-full">
                                    <img
                                        src=${post.image} />
                                </div>
                            </div>`}
                        </div>
                        <div>
                            <div class="flex gap-5">
                                <p>#${post.category}</p>
                                <p>Authon: ${post.author.name} </p>
                            </div>
                            <h1 class="text-xl font-bold my-3">${post.title}</h1>
                            <p>${post.description}</p>
                                <div class="flex items-center gap-4 mt-5">
                                    <p>89</p>
                                    <p>3433</p>
                                    <p>22 min</p>
                                    <div class="flex flex-grow justify-end">
                                        <button onclick="handleList('${post.title}')" class="button">Read</button>
                                    </div>
                                </div>
                        </div>
                    </div>`;

        getnewsCard.appendChild(div);

    });
    loaderSpinner(false);
}

const loaderSpinner = (isLoading) => {
    const getLoader = document.getElementById("spinner");
    if (isLoading) {
        getLoader.classList.remove('hidden')
    }
    else {
        getLoader.classList.add('hidden');
    }
}

const handleList = (title) =>{
    const readlist = document.getElementById('readlist')
    const div = document.createElement('div');
    div.innerHTML = `<h1 class="text-lg font-bold p-2 bg-white rounded-lg my-2">${title}</h1>`

    readlist.appendChild(div)
    console.log('click', title);
    
}



const handleRead = (title) => {
    
    console.log('okkkfff', title);

    // // for (let i = 0; i < 10; i++) {
    // //     const mark = getElementById('mark');
    // //     mark.innerText = `Mark as Read:${i}`
    // // }

}

loadNews()
