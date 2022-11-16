import React from 'react'

function Leaderboard() {
  return (
    <div>
        <main class="main-content ">
<div class="inner-container">
<nav class="breadcrumbs" aria-label="Breadcrumb">
<ul itemscope itemprop="breadcrumb" itemtype="https://schema.org/BreadcrumbList" class="breadcrumbs__list">
<li itemscope itemprop="itemListElement" itemtype="https://schema.org/ListItem" class="breadcrumbs__list-item">
<a itemprop="item" href="../index.html" class="breadcrumbs__link breadcrumbs__object">
<span itemprop="name">Main page</span>
</a>
<meta itemprop="position" content="1" />
</li>
<li itemscope itemprop="itemListElement" itemtype="https://schema.org/ListItem" class="breadcrumbs__list-item">
<span itemprop="name" class="breadcrumbs__text breadcrumbs__object">
Leaderboards
</span>
<meta itemprop="position" content="2" />
</li>
</ul>
</nav>
<div class="leaderboard-show">
<h1 class="leaderboard-show__header">
Leaderboards
</h1>

<ul class="leaderboard-show__tabs">
<li class="leaderboard-show__tab leaderboard-show__tab--active">
<a class="leaderboard-show__tab-link" href="debates.html">
Debates
</a>
</li>
<li class="leaderboard-show__tab ">
<a class="leaderboard-show__tab-link" href="forum.html">
Forum
</a>
</li>
</ul>

<div class="leaderboard-show__list-settings">
<p class="leaderboard-show__list-number">
Members found:
659
</p>
<form action="https://www.debateart.com/leaderboard/debates" class="leaderboard-show__list-settings-form" method="get">
<input aria-label="Filter members" autocomplete="off" class="leaderboard-show__list-setting leaderboard-show__list-setting--search" maxlength="100" name="search" placeholder="Filter members" spellcheck="false" type="text" />
<select aria-label="Sorting field" class="leaderboard-show__list-setting leaderboard-show__list-setting--order-type uk-select" name="order_type"><option value="username">Member</option><option value="total_debates">Total debates</option><option value="won_debates">Won debates</option><option value="lost_debates">Lost debates</option><option value="tied_debates">Tied debates</option><option value="win_percentage">Win percentage</option><option value="rating" selected>Rating</option><option value="comments_number">Comments number</option><option value="votes_number">Votes number</option></select>
<select aria-label="Sorting direction" class="leaderboard-show__list-setting leaderboard-show__list-setting--order-direction uk-select" name="order_direction"><option value="desc" selected>Descending</option><option value="asc">Ascending</option></select>
</form>
</div>

<div class="leaderboard-show__list">
<div class="leaderboard-show__list-top">
<div class="leaderboard-show__list-header leaderboard-show__list-header--position">
#
</div>
<div class="leaderboard-show__list-header leaderboard-show__list-header--username">
<a href="debatesa5e5.html?order_direction=asc&amp;order_type=username"> Member </a>
</div>
<div class="leaderboard-show__list-header leaderboard-show__list-header--username leaderboard-show__list-header--replacement">
Members
</div>
<div class="leaderboard-show__list-header leaderboard-show__list-header--debates">
<a href="debatesbf3f.html?order_direction=asc&amp;order_type=total_debates"> Total </a>
</div>
<div class="leaderboard-show__list-header leaderboard-show__list-header--debates-won">
<a href="debates8c99.html?order_direction=asc&amp;order_type=won_debates"> Won </a>
</div>
<div class="leaderboard-show__list-header leaderboard-show__list-header--debates-lost">
<a href="debates55d5.html?order_direction=asc&amp;order_type=lost_debates"> Lost </a>
</div>
<div class="leaderboard-show__list-header leaderboard-show__list-header--debates-tied">
<a href="debatesa47b.html?order_direction=asc&amp;order_type=tied_debates"> Tie </a>
</div>
<div class="leaderboard-show__list-header leaderboard-show__list-header--win-percentage">
<a href="debates3736.html?order_direction=asc&amp;order_type=win_percentage"> Win percentage </a>
</div>
<div class="leaderboard-show__list-header leaderboard-show__list-header--rating">
<a href="debates09df.html?order_direction=asc&amp;order_type=rating"> Rating </a>
</div>
<div class="leaderboard-show__list-header leaderboard-show__list-header--comments">
<a href="debates9aa1.html?order_direction=asc&amp;order_type=comments_number"> Comments </a>
</div>
<div class="leaderboard-show__list-header leaderboard-show__list-header--votes">
<a href="debates29d2.html?order_direction=asc&amp;order_type=votes_number"> Votes </a>
</div>
</div>
<ul class="leaderboard-show__list-body">
<li class="leaderboard-show__list-row   ">
<div class="leaderboard-show__list-item leaderboard-show__list-item--position">
<div class="leaderboard-show__list-item-name">
#
</div>
<div class="leaderboard-show__list-item-value">
1
</div>
</div>
<div class="leaderboard-show__list-item leaderboard-show__list-item--username">
<a class="leaderboard-show__list-item-link" href="../profiles/oromagi.html">
<div class="leaderboard-show__list-item-avatar-wrap">

</div>
<div class="leaderboard-show__list-item-link-text">
oromagi
</div>
</a>
</div>
<div class="leaderboard-show__list-item leaderboard-show__list-item--debates">
<div class="leaderboard-show__list-item-name">
Total debates
</div>
<div class="leaderboard-show__list-item-value">
117
</div>
</div>
<div class="leaderboard-show__list-item leaderboard-show__list-item--debates-won">
<div class="leaderboard-show__list-item-name">
Won debates
</div>
<div class="leaderboard-show__list-item-value">
114
</div>
</div>
<div class="leaderboard-show__list-item leaderboard-show__list-item--debates-lost">
<div class="leaderboard-show__list-item-name">
Lost debates
</div>
<div class="leaderboard-show__list-item-value">
3
</div>
</div>
<div class="leaderboard-show__list-item leaderboard-show__list-item--debates-tied">
<div class="leaderboard-show__list-item-name">
Tied debates
</div>
<div class="leaderboard-show__list-item-value">
0
</div>
</div>
<div class="leaderboard-show__list-item leaderboard-show__list-item--win-percentage">
<div class="leaderboard-show__list-item-name">
Win percentage
</div>
<div class="leaderboard-show__list-item-value">
97.44%
</div>
</div>
<div class="leaderboard-show__list-item leaderboard-show__list-item--rating">
<div class="leaderboard-show__list-item-name">
Rating
</div>
<div class="leaderboard-show__list-item-value">
1922
</div>
</div>
<div class="leaderboard-show__list-item leaderboard-show__list-item--comments">
<div class="leaderboard-show__list-item-name">
Comments
</div>
<div class="leaderboard-show__list-item-value">
1,023
</div>
</div>
<div class="leaderboard-show__list-item leaderboard-show__list-item--votes">
<div class="leaderboard-show__list-item-name">
Votes
</div>
<div class="leaderboard-show__list-item-value">
326
</div>
</div>
</li>


</ul>
</div>

<nav aria-label="Pagination" class="leaderboard-show__pagination pagination--default pagination"><ul class="pagination__list"><li class="pagination__list-item pagination__list-item--current"><a aria-current="true" aria-label="Current page, page 1" class="pagination__link" href="debates2679.html?page=1">1</a></li><li class="pagination__list-item"><a aria-label="Page 2" class="pagination__link" href="debates4658.html?page=2">2</a></li><li class="pagination__list-item pagination__list-item--ellipsis">&hellip;</li><li class="pagination__list-item"><a aria-label="Page 22" class="pagination__link" href="debates3c09.html?page=22">22</a></li><li class="pagination__list-item"><a aria-label="Next page" class="pagination__link" href="debates4658.html?page=2">Forward »</a></li></ul></nav>
</div>
</div>
</main>
    </div>
  )
}

export default Leaderboard