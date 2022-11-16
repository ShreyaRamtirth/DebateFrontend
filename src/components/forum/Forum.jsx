import React from "react";
import { Link } from "react-router-dom";

function Forum() {
  return (
    <div>
      <main className="main-content ">
        <div className="inner-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ul
              itemscope
              itemprop="breadcrumb"
              itemtype="https://schema.org/BreadcrumbList"
              className="breadcrumbs__list"
            >
              <li
                itemscope
                itemprop="itemListElement"
                itemtype="https://schema.org/ListItem"
                className="breadcrumbs__list-item"
              >
                <a
                  itemprop="item"
                  href="index.html"
                  className="breadcrumbs__link breadcrumbs__object"
                >
                  <span itemprop="name">Main page</span>
                </a>
                <meta itemprop="position" content="1" />
              </li>
              <li
                itemscope
                itemprop="itemListElement"
                itemtype="https://schema.org/ListItem"
                className="breadcrumbs__list-item"
              >
                <span
                  itemprop="name"
                  className="breadcrumbs__text breadcrumbs__object"
                >
                  Forum
                </span>
                <meta itemprop="position" content="2" />
              </li>
            </ul>
          </nav>
          <div className="forum-show">
            <div className="forum-show__top">
              <h1 className="forum-show__header">Forum</h1>
              <a
                className="button forum-show__search-button"
                href="search6f11.html?type=forum-topics"
                aria-label="Search forum topics"
              >
                <i className="fa fa-search"></i>
                <span> Search </span>
              </a>
            </div>
            <div className="forum-show__main">
              <section className="forum-show__categories">
                <div className="forum-show__categories-headers">
                  <h2 className="forum-show__categories-header forum-show__categories-header--category">
                    Category
                  </h2>
                  <h2 className="forum-show__categories-header forum-show__categories-header--category forum-show__categories-header--replacement">
                    Categories
                  </h2>
                  <div className="forum-show__categories-header forum-show__categories-header--topics">
                    Topics
                  </div>
                  <div className="forum-show__categories-header forum-show__categories-header--posts">
                    Posts
                  </div>
                  <div className="forum-show__categories-header forum-show__categories-header--last-post">
                    Last post
                  </div>
                </div>

                <div className="forum-show__categories-list">
                  <div className="forum-show__category">
                    <div className="forum-show__category-name forum-show__category-section">
                      <div className="forum-show__category-name-details">
                        <Link
                          to="Artistic"
                          className="forum-show__category-name-link"
                        >
                          Artistic expressions
                        </Link>
                        <p className="forum-show__category-name-description">
                          Topics related to community generated art, music and
                          writings
                        </p>
                        <div className="forum-show__category-name-timestamp">
                          Updated
                          <time datetime="2022-11-06T13:44:33Z">
                            3 days ago
                          </time>
                        </div>
                      </div>
                    </div>

                    <div className="forum-show__category-topics forum-show__category-section">
                      114
                    </div>
                    <div className="forum-show__category-posts forum-show__category-section">
                      1,980
                    </div>

                    <div className="forum-show__category-last-post forum-show__category-section">
                      <div className="forum-show__category-last-post-link-wrap">
                        <a
                          href="forum/topics/8181-favorite-short-prose-speeches-essays-etc2679.html?page=1"
                          className="forum-show__category-last-post-link"
                          title="Go to the last page of the topic"
                        >
                          Favorite Short Prose (speeches, essays, etc)
                        </a>
                      </div>
                      <div className="forum-show__category-last-post-author">
                        Author:
                        <a
                          href="profiles/ebuc.html"
                          className="forum-show__category-last-post-author-link"
                        >
                          ebuc
                        </a>
                      </div>
                      <div className="forum-show__category-last-post-timestamp">
                        <time datetime="2022-11-06T13:44:33Z">3 days ago</time>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="forum-show__topics forum-show__topics--hot">
                <h2 className="forum-show__topics-header">Hot topics</h2>
                <ul className="forum-show__topics-list">
                  <li className="forum-show__topics-list-item">
                    <div className="forum-show__topics-link-wrap">
                      <a
                        className="forum-show__topics-link"
                        href="forum/topics/8212-midterm-thread.html"
                      >
                        Midterm Thread
                      </a>
                    </div>
                    <div className="forum-show__topics-timestamp">
                      Updated
                      <time datetime="2022-11-10T07:27:30Z">5 hours ago</time>
                    </div>
                  </li>
                  <li className="forum-show__topics-list-item">
                    <div className="forum-show__topics-link-wrap">
                      <a
                        className="forum-show__topics-link"
                        href="forum/topics/8217-democrats-are-performing-so-horribly-that-even-the-head-of-strategizing-lost-reelection-in-new-york.html"
                      >
                        Democrats Are Performing SO HORRIBLY That Even The Head
                        of Strategizing Lost Reelection IN NEW YORK
                      </a>
                    </div>
                    <div className="forum-show__topics-timestamp">
                      Updated{" "}
                      <time datetime="2022-11-10T02:01:15Z">11 hours ago</time>
                    </div>
                  </li>
                </ul>
              </section>
              <section className="forum-show__topics forum-show__topics--new">
                <h2 className="forum-show__topics-header">New topics</h2>
                <ul className="forum-show__topics-list">
                  <li className="forum-show__topics-list-item">
                    <div className="forum-show__topics-link-wrap">
                      <a
                        className="forum-show__topics-link"
                        href="forum/topics/8219-unnamed-site-member-will-you-sit-still-or-try.html"
                      >
                        Unnamed site member, will you sit still or try?
                      </a>
                    </div>
                    <div className="forum-show__topics-timestamp">
                      Created{" "}
                      <time datetime="2022-11-10T04:40:20Z">8 hours ago</time>
                    </div>
                  </li>
                  <li className="forum-show__topics-list-item">
                    <div className="forum-show__topics-link-wrap">
                      <a
                        className="forum-show__topics-link"
                        href="forum/topics/8218-why-is-there-so-much-inflation-at-the-grocery-store.html"
                      >
                        Why is there so much inflation at the grocery store?
                      </a>
                    </div>
                    <div className="forum-show__topics-timestamp">
                      Created{" "}
                      <time datetime="2022-11-09T22:19:45Z">14 hours ago</time>
                    </div>
                  </li>
                  <li className="forum-show__topics-list-item">
                    <div className="forum-show__topics-link-wrap">
                      <a
                        className="forum-show__topics-link"
                        href="forum/topics/8217-democrats-are-performing-so-horribly-that-even-the-head-of-strategizing-lost-reelection-in-new-york.html"
                      >
                        Democrats Are Performing SO HORRIBLY That Even The Head
                        of Strategizing Lost Reelection IN NEW YORK
                      </a>
                    </div>
                    <div className="forum-show__topics-timestamp">
                      Created{" "}
                      <time datetime="2022-11-09T17:18:11Z">19 hours ago</time>
                    </div>
                  </li>
                  <li className="forum-show__topics-list-item">
                    <div className="forum-show__topics-link-wrap">
                      <a
                        className="forum-show__topics-link"
                        href="forum/topics/8216-it-appears-americans-are-saving-democracy-tonight.html"
                      >
                        It appears Americans are saving Democracy tonight
                      </a>
                    </div>
                    <div className="forum-show__topics-timestamp">
                      Created{" "}
                      <time datetime="2022-11-09T05:07:52Z">yesterday</time>
                    </div>
                  </li>
                  <li className="forum-show__topics-list-item">
                    <div className="forum-show__topics-link-wrap">
                      <a
                        className="forum-show__topics-link"
                        href="forum/topics/8215-thoughts-on-elon-musks-acquisition-of-twitter.html"
                      >
                        Thoughts on Elon Musk&#39;s Acquisition of Twitter?
                      </a>
                    </div>
                    <div className="forum-show__topics-timestamp">
                      Created{" "}
                      <time datetime="2022-11-08T23:04:57Z">yesterday</time>
                    </div>
                  </li>
                </ul>
              </section>
              <section className="forum-show__tags">
                <h2 className="forum-show__tags-header">Hot tags</h2>
                <div className="forum-show__tags-list">
                  <div className="forum-show__tags-list-item">
                    <a
                      className="forum-show__tags-link"
                      href="search27fb.html?type=forum-topics&amp;search_term=%5Bcorruption%5D"
                      title="Show all topics with this tag"
                    >
                      Education
                    </a>
                  </div>
                  <div className="forum-show__tags-list-item">
                    <a
                      className="forum-show__tags-link"
                      href="searchb96d.html?type=forum-topics&amp;search_term=%5Bdnc%5D"
                      title="Show all topics with this tag"
                    >
                      Politics
                    </a>
                  </div>
                  <div className="forum-show__tags-list-item">
                    <a
                      className="forum-show__tags-link"
                      href="search4efe.html?type=forum-topics&amp;search_term=%5Bdementia%5D"
                      title="Show all topics with this tag"
                    >
                      Nation
                    </a>
                  </div>
                  <div className="forum-show__tags-list-item">
                    <a
                      className="forum-show__tags-link"
                      href="search8cdf.html?type=forum-topics&amp;search_term=%5BBiden%5D"
                      title="Show all topics with this tag"
                    >
                      Nature
                    </a>
                  </div>
                  <div className="forum-show__tags-list-item">
                    <a
                      className="forum-show__tags-link"
                      href="searche170.html?type=forum-topics&amp;search_term=%5BMafia%5D"
                      title="Show all topics with this tag"
                    >
                      Mafia
                    </a>
                  </div>
                  <div className="forum-show__tags-list-item">
                    <a
                      className="forum-show__tags-link"
                      href="search0306.html?type=forum-topics&amp;search_term=%5BMafia+Game%5D"
                      title="Show all topics with this tag"
                    >
                      Corona
                    </a>
                  </div>
                  <div className="forum-show__tags-list-item">
                    <a
                      className="forum-show__tags-link"
                      href="search4d7e.html?type=forum-topics&amp;search_term=%5BRM%5D"
                      title="Show all topics with this tag"
                    >
                      Social Media
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Forum;
