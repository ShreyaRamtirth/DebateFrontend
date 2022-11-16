import React from "react";

function Profile() {
  return (
    <div>
      <main className="main-content ">
        <div className="inner-container">
          <div
            className="profile-show"
            itemscope
            itemprop="mainEntity"
            itemtype="http://schema.org/Person"
          >
            <div className="profile-show__banner">
              <div className="profile-show__banner-wallpaper"></div>
              <div className="profile-show__banner-info">
                <div className="profile-show__banner-avatar">
                  <img
                    alt="Mall&#39;s avatar"
                    className="profile-show__banner-avatar-image"
                    src="https://secure.gravatar.com/avatar/2d208329abc403adc44e3aba85cf5be6?s=400&amp;d=identicon"
                  />
                  <div
                    data-uk-tooltip="Last online - 14 hours ago"
                    aria-label="Last online - 14 hours ago"
                    className="profile-show__banner-avatar-online-indicator profile-show__banner-avatar-online-indicator--recently"
                    role="img"
                    tabindex="-1"
                  ></div>
                </div>
                <div className="profile-show__banner-user">
                  <h1 className="profile-show__banner-username  ">Mall</h1>
                  <div className="profile-show__banner-timestamp">
                    A member since
                    <time datetime="2018-12-12T11:26:46Z">
                      December 12, 2018
                    </time>
                  </div>
                </div>
              </div>
            </div>
            <ul className="profile-show__tabs">
              <li className="profile-show__tab profile-show__tab--active">
                <span className="profile-show__tab-link">Profile</span>
              </li>
            </ul>
            <div className="profile-show__main">
              <div className="profile-show__main-side">
                <section className="profile-show__stats profile-show__info-block">
                  <div className="profile-show__info-block-header">
                    <i
                      aria-hidden="true"
                      className="profile-show__info-block-header-icon fa fa-chart-bar"
                    ></i>
                    <h2 className="profile-show__info-block-header-text">
                      Statistics
                    </h2>
                  </div>
                  <dl className="profile-show__stats-items">
                    <div className="profile-show__stats-item  profile-show__info-block-pair">
                      <dt className="profile-show__info-block-pair-name">
                        Debates
                      </dt>
                      <dd className="profile-show__info-block-pair-value">154</dd>
                    </div>
                    <div className="profile-show__stats-item profile-show__stats-item--sub profile-show__info-block-pair">
                      <dt className="profile-show__info-block-pair-name">Won</dt>
                      <dd className="profile-show__info-block-pair-value">30</dd>
                    </div>
                    <div className="profile-show__stats-item profile-show__stats-item--sub profile-show__info-block-pair">
                      <dt className="profile-show__info-block-pair-name">Lost</dt>
                      <dd className="profile-show__info-block-pair-value">103</dd>
                    </div>
                    <div className="profile-show__stats-item profile-show__stats-item--sub profile-show__info-block-pair">
                      <dt className="profile-show__info-block-pair-name">Tied</dt>
                      <dd className="profile-show__info-block-pair-value">21</dd>
                    </div>
                    <div className="profile-show__stats-item profile-show__stats-item--sub profile-show__info-block-pair">
                      <dt className="profile-show__info-block-pair-name">
                        Win ratio
                      </dt>
                      <dd className="profile-show__info-block-pair-value">26.3%</dd>
                    </div>
                    <div className="profile-show__stats-item  profile-show__info-block-pair">
                      <dt className="profile-show__info-block-pair-name">Rating</dt>
                      <dd className="profile-show__info-block-pair-value">1,499</dd>
                    </div>
                    <div className="profile-show__stats-item  profile-show__info-block-pair">
                      <dt className="profile-show__info-block-pair-name">
                        Debate votes
                      </dt>
                      <dd className="profile-show__info-block-pair-value">0</dd>
                    </div>
                    <div className="profile-show__stats-item  profile-show__info-block-pair">
                      <dt className="profile-show__info-block-pair-name">
                        Debate comments
                      </dt>
                      <dd className="profile-show__info-block-pair-value">210</dd>
                    </div>
                    <div className="profile-show__stats-item  profile-show__info-block-pair">
                      <dt className="profile-show__info-block-pair-name">
                        Forum topics
                      </dt>
                      <dd className="profile-show__info-block-pair-value">0</dd>
                    </div>
                    <div className="profile-show__stats-item  profile-show__info-block-pair">
                      <dt className="profile-show__info-block-pair-name">
                        Forum posts
                      </dt>
                      <dd className="profile-show__info-block-pair-value">18</dd>
                    </div>
                  </dl>
                </section>
              </div>
              <div className="profile-show__main-rest">
                <section className="profile-show__personal-info profile-show__info-block">
                  <div className="profile-show__info-block-header">
                    <i
                      aria-hidden="true"
                      className="profile-show__info-block-header-icon fa fa-address-card"
                    ></i>
                    <h2 className="profile-show__info-block-header-text">
                      Personal information
                    </h2>
                  </div>
                  <dl className="profile-show__personal-info-items">
                    <div className="profile-show__personal-info-item profile-show__info-block-pair">
                      <dt className="profile-show__personal-info-item-name profile-show__info-block-pair-name">
                        Username
                      </dt>
                      <dd className="profile-show__personal-info-item-value profile-show__personal-info-item-value--empty profile-show__info-block-pair-value">
                        Unknown
                      </dd>
                    </div>
                    <div className="profile-show__personal-info-item profile-show__info-block-pair">
                      <dt className="profile-show__personal-info-item-name profile-show__info-block-pair-name">
                        Email
                      </dt>
                      <dd className="profile-show__personal-info-item-value profile-show__personal-info-item-value--empty profile-show__info-block-pair-value">
                        Unknown
                      </dd>
                    </div>
                    <div className="profile-show__personal-info-item profile-show__info-block-pair">
                      <dt className="profile-show__personal-info-item-name profile-show__info-block-pair-name">
                        Country
                      </dt>
                      <dd className="profile-show__personal-info-item-value profile-show__personal-info-item-value--empty profile-show__info-block-pair-value">
                        India
                      </dd>
                    </div>
                    <div className="profile-show__personal-info-item profile-show__info-block-pair">
                      <dt className="profile-show__personal-info-item-name profile-show__info-block-pair-name">
                        Native language
                      </dt>
                      <dd className="profile-show__personal-info-item-value profile-show__personal-info-item-value--empty profile-show__info-block-pair-value">
                        Unknown
                      </dd>
                    </div>
                  </dl>
                </section>
                <section className="profile-show__about-me profile-show__info-block">
                  <div className="profile-show__info-block-header">
                    <i
                      aria-hidden="true"
                      className="profile-show__info-block-header-icon fa fa-align-left"
                    ></i>
                    <h2 className="profile-show__info-block-header-text">
                      About me
                    </h2>
                  </div>
                  <div
                    className="profile-show__info-block-long-text"
                    itemprop="description"
                  >
                    <p className="profile-show__info-block-long-text-part">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      In perferendis repellendus illo fugit ipsum, asperiores
                      suscipit nesciunt iure! Facilis voluptate tempora possimus
                      labore mollitia architecto facere, omnis quae blanditiis
                      minus.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
