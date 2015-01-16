Just playing around with React, Reflux, and Immutable.js


Architecture
============

### Game API

- Via Websockets
- Requires Authentication
  - No registration, accounts will be manually handed out.
- Channels:
  - Chat
  - Actions, such as:
    - Timing points in a turn
    - Clicks
    - Timing points in a run
  - Prompts
    - Computer asking for player to make a decision
  - UI Interactivity
    - Mouseover
    - Moving things around
    - Generally fill the time in between actual actions, so the players know
      their opponent is 'thinking'.
  - Global
    - Pause/Play (with timeout, but player can wait if they want)
- State
  - Chat Log
  - Game State
    - Full History of every action taken (with timestamps)
    - Can Undo/Redo
    - Can replay full game (in human time or sped up)
    - Do we even need to 'snapshot' the state?
       - With a full history we can rebuild the current state at any point, in theory.
- All actions validated by the server, so no cheating.
- Information needs to be classified as either Player A, Player B, or Global
  - Live 'Spectators' can only see global.
  - Delayed 'Spectators' can see all info.
  - Possible mode where a judge can specifically see all info.


### Game UI

- Tech
  - Router (react-router?)
  - Reflux?
  - React Components
  - LESS?
- Screens
  - Account / Deck Management
  - Lobby (create/join games)
  - Game Lobby
    - Pick side
    - Pick deck
    - Chat
  - Game
    - Pregame:
      - Mulligan
    - In-Game:
      - 'Zones' that cards go in depending on runner/corp; examples:
        - R&D (type = 'deck', owner = corp player)
        - Archives (type = 'trash')
        - HQ (type = 'hand')
        - Programs (type = 'play', subtype = 'programs')
        - Remote Server (type = 'play', subtype = 'server', subtype = 'remote')
           - Root (type = 'play', subtype = 'server-root')
           - ICE (type = 'play', subtype = 'server-ice')
        - Scoring (type = 'scoring')
        - Current (type = 'current', owners = both players)
        - Out of Game (type = 'void', owner = corp player)
    - Ideally, UI auto zooms in/out as needed.
      - Optionally manually zoom? or 'always max zoom' or w/e?
    - Collapse remote servers, must be confirmed by the opponent.
    - 'Flow' of a turn/run
      - Can see all timing structure steps
      - Can toggle wait/confirm at each step
      - Steps where its global knowledge that a player cannot react can be skipped
      - If a player *could* react, then we should pause.
         - Since there will be a metic crapload of saying 'continue', need to
           make sure that UI/keybinding feels not annoying.
      - Draw players attention to current action (highlight)?

### Game Data

- Server
  - Knows everything
- Client
  - Each player will have known and unknown things.
  - Before the game starts, every card is given a random unique id. That is sent
    down to the players as needed.
  - Will need to regenerate ids at certain points in the game e.g:
    - Deck is reshuffled
  - As cards are placed in the various zones, the opponents will know which cardId is
    where. When they initiate actions on unknown cards, the id is used.

### Random Ideas

- 'Lazy' Tournaments
  - Swiss Rounds are played with timed matches, but indefinite time between matches.
  - Whenever a round is complete, players will be matched up with their next opponent
    and get emailed. They can log into the lobby and chat to set up a convenient
    play time.
- 'Timed' Tournaments
  - Played like an IRL tournament.
  - Strict breaks between matches with games automatically starting on a schedule.
  - Missed games count as forfeits.
- 'League' play
  - Maximum number of scored games per week.
  - Can play unlimited 'practice' games.
  - Ladder rankings.
