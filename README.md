# Event Manager and Features

1. This Event manager website was used to create and view the list of events
2. On hovering the list of events you can find which event has been highlighted
3. On clicking of any event will display a pop-up with event Event Details
4. Search box in page will filter event based on text entered in it (Search is based on JSON.stringify of events not integrated filter on this scope).
5. Add New event button will open pop up to enter details of new event and create it

#Additional Feature (I opted this over Unit testing, I know UT is very important I always cover 100% but due to time constrain I am not doing UT now)

6. Added Validation on Each field on Add Event page and error message will be displayed on empty values and on Submit.
7. Weather report has been added on Event detail pop-up
8. Weather report will be current weather only based on Latitude and Longitude provided on event (In Future based on city we can predict on given date).
9. Loader will be shown next to weather till API loads
10. Failed to fetch error message will be displayed on API error

## Framework selection
I chose React to build this application as I am comfortable with it and there are reusable components I can develop
I thought to integrate Redux for state management but I thought to challenge myself with pure React (Thought to use context but there was no need came for that.)
I chose @materialui https://material-ui.com/components/text-fields/ for UI components
I have hands on in firebase so I have hosted the tool in firebase on url https://event-manager-4553b.web.app/

## To start in localhost

1. Clone the package
    `git clone git@github.com:iyyoo93/EventManger.git` or
    `git clone https://github.com/iyyoo93/EventManger.git`

2. Install node package
    `npm install`

3. Start the app, which will run on port 3000 http://localhost:3000/
    `npm start`

    This app is will hot-reload on our changes so don't worry about reload :)
