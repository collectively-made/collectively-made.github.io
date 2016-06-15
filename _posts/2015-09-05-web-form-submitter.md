---
layout: post
title: QIS Web Form Submitter Tool
category: QIS
cover-image: web-form-submitter.jpg
subtitle: Designing an efficient way to collect and submit information.
collaborators:
    - name: <a href="mailto:hayden@collectivelymade.com">Hayden Gascoigne</a>
    - name: <a href="mailto:bringbota@collectivelymade.com">Bode Alabi</a>
    - name: <a href="mailto:alex@collectivelymade.com">Alexander Russell</a>
    - name: <a href="mailto:hello@protobanao.co">Proto Banao</a>


---

<img src="{{ site.baseurl }}/img/form-submitter-1.png" />

This QIS app exists to allow users to fill out and submit forms to monitor quality assurance. As users began to use the application, it became aware there was a need for a capability to fill out forms using the web application. The form submitter is all about collecting data, and collecting data efficiently.

### Scannability over Richness

Supervisors usually submit forms using the mobile app while at the location they are evaluating. However, if doing a book review or financial review of the location which required accessing another electronic health records system online in addition to the information collected on location, supervisors would often leave the location and return to the office to fill out and submit these forms. This meant they were filling out a form based on their memory and or notes. Because of this, supervisors would prefer to be able to quickly scan through the questions and answer options as opposed to the more intimate approach of one question at a time such as in the mobile app. The increase in screen real-estate lended to this design as well.

<img src="{{ site.baseurl }}/img/formsubmitter-scan.gif" />

### Speed

Saving time became a benefit which provided two points of value: Reducing costs and increasing brand value. Spending less time doing any monotonous activity meant more time for quality assurance. Also, when time equals money, automating this process inevitably means cost savings.

Speed appears as a theme throughout the entire QIS software design, and specifically in the Form Submitter. Supervisors have immediate access to change or edit the details about the form they want to fill out. We also noticed that supervisors would frequently fill out multiple forms for a location or multiple locations for the same form in one sitting. To assist with this, once a form is submitted, the user is prompted with a decision to fill out a different form for this location or to fill  out this same form for a different location. That button allows them to quicken the process of filling out multiple forms.

### Minimalism

There is the potential for a lot options and editable fields in the QIS app. The supervisors we have been testing with all have varied levels of technological expertise, so if there was one thing we did not want to do, it was overwhelm the supervisor. When approaching the experience of the form submitter, we decided to begin with a hand-holding type experience which prompts the supervisor to make decisions about the form they are filling out. First, you choose a form, second, you choose a location, and so on. Each of these decisions influences the next choice. For example, choosing a certain form will narrow down the choices of available locations because not all locations need the same form filled out.


<!-- ## Not hovered, kind of hovered, totally hovered

[gif of the hovering thing]

In our first design, we had conflicting opinions about the visibility of the media buttons. Having icons for every single question created a lot of clutter on an otherwise pretty minimal page. We explored having these options appear when the cursor was hovered on the question itself, but ultimately concluded that hiding options until this interaction was harmful to the experience. Supervisors wouldn’t think to navigate to the buttons until already hovered. Perhaps they wanted to add an image or a comment before actually answering the question - they would have to hover on the question area before being able to select the button.

The solution became a series of states the buttons would go through. Not hovered meant the buttons would be smaller and opaque so that they didn’t clutter the space. Hovering on the container then enlarged the buttons and gave them a darker shade. Actually hovering on the button changes it even darker, letting the supervisor know which button they are on. Once a photo or comment has been added, the button state turns blue and, in the case of photos, a number is provided, letting the supervisors know how many photos have been added.

[ gif of not hovered, kind of hovered, totally hovered ] -->
