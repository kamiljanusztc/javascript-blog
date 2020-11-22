/*
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
  */

{
  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    console.log(event);

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts .active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* [IN PROGRESS] add class 'active' to the clicked link */

    clickedElement.classList.add('active');

    console.log('clickedElement:', clickedElement);

    /* get 'href' attribute from the clicked link */

    const href = clickedElement.getAttribute('href');

    console.log(href);

    /* find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(href);

    console.log(targetArticle);

    /* add class 'active' to the correct article */

    targetArticle.classList.add('active');

  }

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author',
    optTagsListSelector = '.tags.list';

    function generateTitleLinks(customSelector = '') {
      console.log(customSelector);

    /* remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = ''; /* delete html */

    /* for each article */

    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    let html = '';

    for (let article of articles) {
      console.log(article);

      /* get the article id */

      const articleId = article.getAttribute('id');

      /* find the title element */

      /* get the title from the title element */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* create HTML of the link */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      console.log(linkHTML);

      /* insert link into titleList */

      html = html + linkHTML;

    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }

  }

  generateTitleLinks();

  function generateTags() {

    /* [NEW] create a new variable allTags with an empty array */
    let allTags = [];

    /* find all articles */

    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);

    /* START LOOP: for every article: */

    for(let article of articles) {
      console.log(article);

      /* find tags wrapper */

      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      console.log(tagsWrapper);

      /* make html variable with empty string */

      let html = '';

      /* get tags from data-tags attribute */

      const articleTags = article.getAttribute('data-tags');

      /* split tags into array */

      const articleTagsArray = articleTags.split(' ');
      console.log(articleTagsArray);

      /* START LOOP: for each tag */

      for(let tag of articleTagsArray) {
        console.log(tag);

        /* generate HTML of the link */

        const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        console.log(linkHTML);

        /* add generated code to html variable */

        html = html + linkHTML;

        /* [NEW] check if this link is NOT already in allTags */

        if(allTags.indexOf(linkHTML) == -1){

        /* [NEW] add generated code to allTags array */

        allTags.push(linkHTML);
        }

      /* END LOOP: for each tag */
      }

      /* insert HTML of all the links into the tags wrapper */

      tagsWrapper.innerHTML = html;
      console.log(tagsWrapper);

    /* END LOOP: for every article: */
    }

    /* [NEW] find list of tags in right column */

    const tagList = document.querySelector('.tags');

    /* [NEW] add html from allTags to tagList */

    tagList.innerHTML = allTags.join(' ');

  }

  generateTags();

  function tagClickHandler(event) {
    /* prevent default action for this event */

    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');

    /* find all tag links with class active */

    const activeTagLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each active tag link */

    for(let activeTagLink of activeTagLinks) {
    console.log(activeTagLink);

      /* remove class active */

      activeTagLink.classList.remove('active');

    /* END LOOP: for each active tag link */
    }

    /* find all tag links with "href" attribute equal to the "href" constant */

    const equalTagLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */

    for(equalTagLink of equalTagLinks) {
    console.log(equalTagLink);

      /* add class active */

      equalTagLink.classList.add('active');

    /* END LOOP: for each found tag link */
    }

    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');

  }

  function addClickListenersToTags() {

    /* find all links to tags */

    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

    /* START LOOP: for each link */

    for(tagLink of tagLinks);
    console.log(tagLink);

      /* add tagClickHandler as event listener for that link */

      tagLink.addEventListener('click', titleClickHandler);

    /* END LOOP: for each link */
  }

  addClickListenersToTags();

  function generateAuthors() {

    /* find all articles */

    const articles = document.querySelectorAll(optArticleSelector);
    console.log(articles);

    /* START LOOP: for every article: */

    for(let article of articles) {
      console.log(article);

      /* find authors wrapper */

      const authorWrapper = article.querySelector(optArticleAuthorSelector);
      console.log(authorWrapper);

      /* make html variable with empty string */

      let html = '';

      /* get tags from data-author attribute */

      const articleAuthor = article.getAttribute('data-author');

      /* generate HTML of the link */

      const linkHTML = '<li><a href="#' + articleAuthor + '">' + articleAuthor + '</a></li>';
      console.log(linkHTML);

      /* add generated code to html variable */

      html = html + linkHTML;

      /* insert HTML of all the links into the author wrapper */

      authorWrapper.innerHTML = html;
      console.log(authorWrapper);

    /* END LOOP: for every article: */
    }
  }

  generateAuthors();

  function authorClickHandler(event) {
    /* prevent default action for this event */

    event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;

    /* make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* make a new constant "author" and extract tag from the "href" constant */

    const author = href.replace('#', '');

    /* find all author links with class active */

    const activeLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each active tag link */

    for(let activeLink of activeLinks) {
    console.log(activeLink);

      /* remove class active */

      activeLink.classList.remove('active');

    /* END LOOP: for each active tag link */
    }

    /* find all tag links with "href" attribute equal to the "href" constant */

    const equalLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */

    for(authorLink of authorLinks) {
    console.log(equalTagLink);

      /* add class active */

      authorLink.classList.add('active');

    /* END LOOP: for each found tag link */
    }

    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-author="' + tag + '"]');

  }

  function addClickListenersToAuthors() {

    /* find all links to tags */

    const activeLinks = document.querySelectorAll('.post-author');

    /* START LOOP: for each link */

    for(activeLink of activeLinks);
    console.log(activeLink);

      /* add tagClickHandler as event listener for that link */

      tagLink.addEventListener('click', authorClickHandler);

    /* END LOOP: for each link */
  }

  addClickListenersToAuthors();

}
