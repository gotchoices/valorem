Got Choices Game Specification

The objective is to create a gaming platform to simulate a variety of economic systems.
By playing games on the platform, people can learn more about the principles explained
on the GotChoices.org website.

The platform should support multiple game models, but only a single model (Valorem) will 
be implemented as part of this specification/scope.  The code will be built to accept 
other models at a later time.

Tool Stack:
- Backend: Colyseus
- Frontend: Phaser, vue.js or approved alternative (game runs in a browser on mobile device)
- Communication: socket.io or approved alternative
- Language: Node.js, JavaScript ES12
- Platform: Linux; Can run in Docker container(s)
- Storage: mongodb, postgresql, sqlite or approved alternative

General Structure:
- Users can connect to the server and create a username and password to connect to their account.
  Storage of a cookie eliminates the need for further entry of the password on that device.
- Once connected, a user can either launch a new game session or connect to a session launched by another user.
- Users launching a game can select from available game models.
- Each new session will have a unitue ID number.
- It will be up to the moderator to share the ID number with prospective players by some independent means.
- Users can select a running session by specifying the ID number.
- For moderated games, the user who launched the game becomes the moderator.
- The moderator has access to a number of settings for the session as described below.
- The moderator can save/restore the all settings under any number of "profile" names, stored under his account.
- Unless noted, settings are settable at the beginning of session and are then stable for the session.
- Users connected to a single session access the same game state and can interact with each other.

Project Reqirements:
- This is just a prototype at this point--meant to test the game logic
- The UI should be understandable but does not need to be fancy (no graphics, images, sound)
- UI can consist of standard HTML5 elements (div, text, background, inputs, buttons)
- Project will be open source and hosted on github.com/gotchoices
- Project will be completed in three rapid phases:
  - Phase 1: Demonstrate backend function and frontend communication
    - Server deployed to tempusvalorem.net
    - Users can register, connect, disconnect, reconnect
    - UI has a single input button
    - Ui shows other connected players and some indication of them pushing their button
  - Phase 2: Build UI for game model below
    - Basic screen shows Stage name and holdings
    - Action buttons appear during Acquisition Phase for incrementing holdings
    - Marketplace appears in Trading Stage
      - Holdings have buttons for selling
      - Marketplace has buttons for selling
  - Phase 3: All scoring and other game logic complete
    - Buttons/actions actually update holding quantities
    - Holdings quantities update correctly during redemption stage
    - Legacy score updates correctly
    - Moderator can update/store/recall settings
    - Games can be launched/scored/finished
  
Tempus Valorem Game Model:
- Each user has a series of "holdings" which start out at zero but can be accumulated throughout the game.
  - Time
  - Commodities (things that can be purchased or worked for) of three types:
    - Consumables (Food, water, medicine, fuel)
    - Durables (Clothing, shelter, things that depreciate quickly)
    - Luxuries (Things that make life more enjoyable, and depreciate very slowly)
  - Capital (Tools, education, machinery, computers, transportation) of three types:
    - Capital - Con; Facilitates the production of Consumables
    - Capital - Dur; Facilitates the production of Durables
    - Capital - Lux; Facilitates the production of Luxuries
  - Legacy (Memories, experiences, quality of past life)
- A game session is divided into rounds (default 10, settable by moderator)
- A round is divided into three stagess:
  - Acquisition
  - Trading
  - Redemption
- The moderator clicks a button to advance to each new stage.
- There is also a back button to go back to the previous stage/round.
- When the last stage of a round is complete, play advances to the next round, first stage.
- When the last round is complete, the player with the highest Legacy score wins.
- All players will be able to see their score and a list of the scores of the other players
  in the session, ranked by score.

- Acquisition Stage:
  - Each player receives a fixed number of time units (default 5, settable by moderator)
  - Players are allowed to "deploy" their time units into acquistion of units of:
    Consumables, Durables, Luxuries, Capital (all types).
  - Each unit of time used will get the user an amount of other holdings according to a rate described below.
  - Any time during this stage, the user an un-deploy/re-deploy until satisfied with his selection.
  - The user can not deploy any more than their available time units.
  - Undeployed time units will be considered as "leisure" time for the round.
  - Deployment rates:
    - Rates all begin at a start value (default 1, settable by moderator)
    - If no capital is present, each time value deployed to acquire (work for) a commodity will produce
      1 unit of the commodity for each time unit spent.
    - For every unit of capital present, the rate of acquisition will be improved by a factor
      (default 10%, settable by moderator).  So for example, if the user has 2 units of "Capital - Con"
      He will get 1.2 units of Cosumables for every time unit deployed to that purpose.
  
- Trading Stage:
  - No further deployment of time units may be performed.
  - A "Marketplace" is now displayed.
  - Players may post any amount of their Commodity or Capital units as "Available" for trade.
  - Each such "proposed trade" must also include a suggested consideration (or price).
    The consideration specifies the quantity of some other Commodity or Capital the player expects
    to receive in exchange for the trade.
  - All such posts will be shown in the Marketplace on all other player's console.
  - Players may accept a proposed trade, by clicking on it.
  - Players may only offer a trade for units they actually possess.
  - Players may only accept a trade if they possess the units specified for consideration.

- Redemption Stage:
  - No more trading may be performed
  - The Marketplace disappears
  - A player's own proposed trades are still retained and can be modified or unlisted during this
    stage and during the following Acquisition Stage but will not be shown to other players in
    the Marketplace until the next Trading Stage.
  - Round scoring is computed as follows:
    - Player's un-deployed time units (liesure time) is multiplied by a "Prime Factor" unique
      to the round (and settable by the moderator).
    - This product is further increased by a factor (default 40% and settable by moderator) for 
      each unit of "Durables" the player has.
    - This product is further increased by a factor (default 20% and settable by moderator) for 
      each unit of "Luxuries" the player has.
    - This resulting product is added to the Legacy total.  In this way, Legacy represents the
      "total enjoyent" of life.  It is our leisure time, but it is made more potent by the
      wealth we possess in durables and luxuries.
  - Asset depreciation is computed as follows:
    - The Durables total units is decreased by a factor (default 20%, settable by moderator).
    - The Luxuries total units is decreased by a factor (default 10%, settable by moderator).
    - Time value is reset to zero
    - Consumables are reduced by a value (default 3, settable by moderator) units.
