import React from "react";
import { Link, useParams } from "react-router-dom";

function DebatingScreen() {
  const { id } = useParams();
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
                  Debate &nbsp; {id}
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
                </section>

                <div className="debate-show__state">
                  <div className="debate-show__topic debate-show__state-box">
                    <div className="debate-show__state-box-header debate-show__state-box-item">
                      <i
                        aria-hidden="true"
                        className="debate-show__state-box-header-icon fa fa-lightbulb"
                      ></i>
                      <div className="debate-show__state-box-header-text debate-show__state-box-header-text--wide">
                        Topic
                      </div>
                    </div>

                    <div className="debate-show__state-box-body">
                      <h1
                        itemProp="name"
                        className="debate-show__topic-text debate-show__state-box-item"
                      >
                        Should voluntary euthanasia be legalised within
                        hospitals?
                      </h1>
                    </div>
                  </div>
                  <div className="debate-show__status debate-show__state-box">
                    <div className="debate-show__state-box-header debate-show__state-box-item">
                      <i
                        aria-hidden="true"
                        className="debate-show__state-box-header-icon fa fa-bullseye"
                      ></i>
                      <div className="debate-show__state-box-header-text debate-show__state-box-header-text--wide">
                        Status
                      </div>

                      <div className="debate-show__status-bar debate-show__status-bar--short">
                        <div className="debate-show__status-bar-line"></div>
                        <div className="debate-show__status-bar-items">
                          <div
                            className="debate-show__status-bar-item debate-show__status-bar-item--finished fas fa-check"
                            title="Stage indicator"
                          ></div>
                          <div
                            className="debate-show__status-bar-item debate-show__status-bar-item--active fas fa-map-marker"
                            title="Stage indicator"
                          ></div>
                          <div
                            className="debate-show__status-bar-item  fas fa-clock"
                            title="Stage indicator"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="debate-show__state-box-body">
                      <div className="debate-show__status-name debate-show__state-box-item">
                        Debating
                      </div>

                      <p className="debate-show__status-description debate-show__state-box-item">
                        Total No of Participants:
                      </p>

                      <div className="debate-show__status-buttons debate-show__state-box-item"></div>

                      <p className="debate-show__status-countdown-text debate-show__state-box-item">
                        The round will be automatically forfeited in:
                      </p>
                      <div
                        className="debate-show__status-countdown debate-show__state-box-item"
                        data-end-date="2022-11-23T20:41:09Z"
                      >
                        Date
                      </div>
                    </div>
                  </div>
                  <div className="debate-show__marking-buttons"></div>
                  <div className="debate-show__params debate-show__state-box">
                    <div className="debate-show__state-box-header debate-show__state-box-item">
                      <i
                        aria-hidden="true"
                        className="debate-show__state-box-header-icon fa fa-info-circle"
                      ></i>
                      <div className="debate-show__state-box-header-text debate-show__state-box-header-text--wide">
                        Parameters
                      </div>
                    </div>

                    <dl className="debate-show__state-box-body">
                      <div className="debate-show__params-item debate-show__state-box-item">
                        <dt className="debate-show__params-item-name">
                          Publication date
                        </dt>
                        <dd className="debate-show__params-item-value ">
                          <time
                            dateTime="2022-10-21T18:19:44Z"
                            itemProp="dateCreated"
                          >
                            10.21.22 06:19PM
                          </time>
                        </dd>
                      </div>
                      <div className="debate-show__params-item debate-show__state-box-item">
                        <dt className="debate-show__params-item-name">
                          Last update date
                        </dt>
                        <dd className="debate-show__params-item-value ">
                          <time
                            dateTime="2022-11-09T20:41:09Z"
                            itemProp="dateModified"
                          >
                            11.09.22 08:41PM
                          </time>
                        </dd>
                      </div>
                      <div className="debate-show__params-item debate-show__state-box-item">
                        <dt className="debate-show__params-item-name">
                          Category
                        </dt>
                        <dd className="debate-show__params-item-value ">
                          Education
                        </dd>
                      </div>
                      <div className="debate-show__params-item debate-show__state-box-item">
                        <dt className="debate-show__params-item-name">
                          Time for argument
                        </dt>
                        <dd className="debate-show__params-item-value ">
                          Two weeks
                        </dd>
                      </div>
                      <div className="debate-show__params-item debate-show__state-box-item">
                        <dt className="debate-show__params-item-name">
                          Voting system
                        </dt>
                        <dd className="debate-show__params-item-value ">
                          Open voting
                        </dd>
                      </div>
                      <div className="debate-show__params-item debate-show__state-box-item">
                        <dt className="debate-show__params-item-name">
                          Voting period
                        </dt>
                        <dd className="debate-show__params-item-value ">
                          One month
                        </dd>
                      </div>
                      <div className="debate-show__params-item debate-show__state-box-item">
                        <dt className="debate-show__params-item-name">
                          Point system
                        </dt>
                        <dd className="debate-show__params-item-value ">
                          Winner selection
                        </dd>
                      </div>
                      <div className="debate-show__params-item debate-show__state-box-item">
                        <dt className="debate-show__params-item-name">
                          Rating mode
                        </dt>
                        <dd className="debate-show__params-item-value ">
                          Rated
                        </dd>
                      </div>
                      <div className="debate-show__params-item debate-show__state-box-item">
                        <dt className="debate-show__params-item-name">
                          Characters per argument
                        </dt>
                        <dd className="debate-show__params-item-value ">
                          1,000
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div className="debate-show__tab-panels">

                
                <div className="debate-show__new-comment debate-show__state-box">
<div className="debate-show__state-box-header debate-show__state-box-item">
<i aria-hidden="true" className="debate-show__state-box-header-icon fa fa-comment"></i>
<div className="debate-show__state-box-header-text debate-show__state-box-header-text--wide">
New comment
</div>
</div>
<div className="debate-show__state-box-body">
<div className="debate-show__state-box-item">
<div className="debate-show__tab-action debate-show__tab-action--inactive" aria-hidden="true">
<p className="debate-show__tab-action-text">
To open a new comment form, click the button below:
</p>
<a href="#" className="button debate-show__tab-action-button" aria-controls="debate-show__new-comment-form-wrap" aria-expanded="true">
Add a new comment
</a>
</div>
<div className="debate-show__tab-action-target" id="debate-show__new-comment-form-wrap" aria-hidden="false">

<div className="debate-show__new-comment-form-row">
<label htmlFor="debate_comment_text" className="debate-show__new-comment-form-label">
Text
</label>
<textarea className="debate-show__new-comment-form-input debate-show__new-comment-form-input--text" id="debate_comment_text" name="debate_comment[text]" placeholder="Enter a comment text" required="required"></textarea>
</div>
<div className="debate-show__new-comment-form-submit-button-wrap">
<button name="button" type="submit" className="button debate-show__new-comment-form-submit-button" data-has-loader="true" data-disable-on-request="true" data-enable-on-response="true">
Create comment
</button>
</div>

</div>
</div>
</div>
</div>
</div>
                <div
                  className="debate-show__argument"
                  data-number="2"
                  itemScope
                  itemProp="hasPart"
                  itemType="http://schema.org/Message"
                >
                  <div className="debate-show__argument-author  ">
                    <div className="debate-show__argument-author-details">
                      <div className="debate-show__argument-author-username">
                        <a
                          href="../profiles/Mall.html"
                          className="debate-show__argument-author-username-link"
                        >
                          Mall
                        </a>
                      </div>
                      <div className="debate-show__argument-author-timestamp">
                        <time
                          dateTime="2022-11-05T14:49:30Z"
                          itemProp="datePublished"
                        >
                          11.05.22 02:49PM
                        </time>
                      </div>
                    </div>
                  </div>

                  <div className="debate-show__argument-text" itemProp="text">
                    <div>
                      I want to quote from Wikipedia here about the Hippocratic
                      oath.tracting harm, that same doctor, same day will take
                      one inflicting harm .<br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DebatingScreen;
