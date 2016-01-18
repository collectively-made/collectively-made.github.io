---
layout: post
title: Data Viewer
category: QIS
cover-image: performance-dashboard.jpg
summary: Reducing the number of steps needed to view performance.
collaborators:
    - name: <a href="mailto:hayden@collectivelymade.com">Hayden Gascoigne</a>
    - name: <a href="mailto:bringbota@collectivelymade.com">Bode Alabi</a>
    - name: <a href="mailto:alex@collectivelymade.com">Alexander Russell</a>
    - name: <a href="mailto:hello@protobanao.co">Proto Banao</a>
---
QIS staff need the ability to view the performance of locations to make informed decisions about improving their quality. To do that we created a system that would aggregate the submissions collected, allowing staff to measure areas against each other and against time. Because most questions are Yes or No questions, we can measure quality of service by looking at the percent of ‘yes’ answers given.

<img src="{{ site.baseurl }}/img/data-viewer-1.png" alt="data-viewer" />

The first big challenge we faced was <i>how do we visualize a large amount of complex data in a simple and minimal way?</i> 

We broke down the process of viewing this data to determine all the different kinds of comparisons that needed to be made. Patterns started appearing, for example: comparing geographic levels against one another provided insight about how well each area or location was doing and owning up to the company wide performance. They would also compare numbers across time to see if things had improved or regressed during a set interval. In addition to measuring different locations against each other, staff need to be able to see the aggregate question scores. This became tricky because, until this point, we were making vertical and horizontal comparisons. Form questions never need to be measured against each other but rather, only against time. Staff need to see if question answers were improving or getting worse.

We opted to hide actual question data in a collapsable component because while necessary to see, it was it’s own set of comparisons. Staff would not compare a location aggregate to a question’s aggregate.

<img src="{{ site.baseurl }}/img/collapsable.gif" alt="collapsable" />

Another important design decision was made about retaining familiarity. The process of picking a form & geographic level were very similar to the way in which a user would pick a form to fill out when using the form submitter. Because of this, we maintained the similarity of the heading area to that of the form submitter. This played along our theme of speed because it reinforced known interactions. It reinforced the idea that using one app would teach you how to use the other.
