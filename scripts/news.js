"use strict";

const news = async function (country, category, pageSize, page, key) {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&page=${page}apiKey=${key}`
  );

  const data = await res.json();
  console.log(data);

  let { articles } = data;
  console.log(articles);
  try {
  } catch (err) {
    console.error(err);
  }
};
const con = "un";
const cata = "";
const size = 50;
const pages = 5;
const apiKeys = "4aeb63983e194023a4e694205173d98d";
// gọi hàm news
news(con, cata, size, pages, apiKeys);

//const render articles
const renderNew = function () {
  let html = ``;
  articles.map((article) => {
    html += `
            <div class="card flex-row flex-wrap">
            <div class="card mb-3" style="">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${article.urlToImage}"
                            class="card-img"
                            alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.content}</p>
                            <a href="${article.url}"
                            class="btn btn-primary">View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;
  });
  newsContainer.innerHTML = html;
};
