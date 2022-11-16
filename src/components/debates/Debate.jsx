import React from "react";
import { Link } from "react-router-dom";
function Debate() {
  return (
    <div>
      <main className="main-content ">
        <div className="inner-container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ul
              itemScope
              itemProp="breadcrumb"
              itemType="https://schema.org/BreadcrumbList"
              className="breadcrumbs__list"
            >
              <li
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
                className="breadcrumbs__list-item"
              >
                <Link to="/" className="breadcrumbs__link breadcrumbs__object">
                  <span itemProp="name">Main page</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
                className="breadcrumbs__list-item"
              >
                <span
                  itemProp="name"
                  className="breadcrumbs__text breadcrumbs__object"
                >
                  Debates
                </span>
                <meta itemProp="position" content="2" />
              </li>
            </ul>
          </nav>
          <div className="debate-index">
            <div className="debate-index__body">
              <div className="debate-index__main-blocks">
                <section className="debate-index__debates">
                  <div className="debate-index__debates-top">
                    <h1 className="debate-index__debates-header">Debates</h1>
                  </div>

                  <div className="debate-index__debates-settings">
                    <p className="debate-index__debates-number">
                      Debates found: 2,303
                    </p>
                   
                      <select
                        aria-label="Debates category"
                        className="debate-index__debates-setting debate-index__debates-setting--category uk-select"
                        name="category_id"
                      >
                        <option value="">Category</option>
                        <option value="1">Art</option>
                        <option value="2">Cars</option>
                        <option value="3">Economics</option>
                        <option value="4">Education</option>
                        <option value="6">Fashion</option>
                        <option value="5">Games</option>
                        <option value="7">Health</option>
                        <option value="21">History</option>
                        <option value="8">Miscellaneous</option>
                        <option value="9">Movies</option>
                        <option value="10">Music</option>
                        <option value="20">Nature</option>
                        <option value="11">People</option>
                        <option value="12">Philosophy</option>
                        <option value="13">Politics</option>
                        <option value="14">Religion</option>
                        <option value="15">Science</option>
                        <option value="16">Society</option>
                        <option value="17">Sports</option>
                        <option value="19">Technology</option>
                        <option value="18">TV</option>
                      </select>
                      <select
                        aria-label="Debates status"
                        className="debate-index__debates-setting debate-index__debates-setting--status uk-select"
                        name="status"
                      >
                        <option value="">Status</option>
                        <option value="challenge">Open challenge</option>
                        <option value="argumentation">Debating</option>
                        <option value="voting">Voting</option>
                        <option value="finished">Finished</option>
                      </select>
                  </div>

                  <ul className="debate-index__debates-list">
                    <li className="debate-index__debate debate-index__debate--argumentation ">
                      <div className="debate-index__debate-status debate-index__debate-status--argumentation">
                        Debating
                      </div>

                      <div className="debate-index__debate-details">
                        <div className="debate-index__debate-topic">
                          <Link
                            to="/debate/1"
                            className="debate-index__debate-topic-link "
                          >
                            The Europeans were justified in conquering the
                            Americas in the name of progress
                          </Link>
                        </div>

                        <div className="debate-index__debate-stats">
                          <div className="debate-index__debate-stats-timestamp">
                            Updated
                            <time dateTime="2022-11-10T12:55:20Z">
                              8 minutes ago
                            </time>
                          </div>
                        </div>

                        <p className="debate-index__debate-description debate-index__debate-description--empty">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptates et quas commodi aliquid natus obcaecati esse iusto eligendi beatae?
                        </p>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Debate;
