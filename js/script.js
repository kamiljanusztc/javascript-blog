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
    optArticleAuthorSelector = '.post-author';

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

      /* END LOOP: for each tag */
      }

      /* insert HTML of all the links into the tags wrapper */

      tagsWrapper.innerHTML = html;
      console.log(tagsWrapper);

    /* END LOOP: for every article: */
    }
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

    const activeTagLinks = 'a[href="' + href + '"]';

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

      equalTagLink.classList.remove('active');

    /* END LOOP: for each found tag link */
    }

    /* execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + tag + '"]');

  }

  function addClickListenersToTags() {

    /* find all links to tags */

    const tagLinks = document.querySelectorAll();

    /* START LOOP: for each link */

    for(tagLink of tagLinks);
    console.log(link);

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

      const articleAuthor= article.getAttribute('data-author');

      /* generate HTML of the link */

      const linkHTML = '<li><a href="#tag-author' + articleAuthor + '">' + articleAuthor + '</a></li>';
      console.log(linkHTML);

      /* add generated code to html variable */

      html = html + linkHTML;

      /* insert HTML of all the links into the tags wrapper */

      tagsWrapper.innerHTML = html;
      console.log(tagsWrapper);

    /* END LOOP: for every article: */
    }
  }

  generateAuthors();

  function addClickListenersToAuthors() {

    /* find all links to tags */

    const tagLinks = document.querySelectorAll();

    /* START LOOP: for each link */

    for(tagLink of tagLinks);
    console.log(link);

      /* add tagClickHandler as event listener for that link */

      tagLink.addEventListener('click', titleClickHandler);

    /* END LOOP: for each link */
  }

  addClickListenersToAuthors();
}



