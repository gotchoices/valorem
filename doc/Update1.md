Some simplifications to make initial prototype simpler:
- The settings can be in a static file rather than building a settings screen for the moderator.  If we do this, YAML is strongly preferred.  If unsure about how to parse YAML, I can help out there.  I can restart the service(s) any time the parameters are changed for now.
- The Redemption Stage is not really a stage so much as it is a "scoring instant" that happens at the end of the round.  No special state is required for that.
- The main different between Acquisition and Trading Stages is that 1) the user can still change his mind about how he wants to allocate his time (during acquisition) and 2) he can't trade until Trading Stage.
- So I think we could compress the first two stages into one UI screen if it shows the user that he is still allocating his time, and he can press a "Done" button to advance himself into Trading.  In other words, all players don't advance to trading stage at the same time but rather, at their own speed.  When you are done allocating your time, you are allowed to trade.  There is an incentive to be quick about it.  I'm fine if you can see the marketplace during acquisition--just can't participate until you are done allocating time.
- I think these three simplifications remove the need for a moderator other than someone needs to start the game, which can now be just a series of timed rounds with the round and a count-down timer showing on everyone's screen.
- I think it really boils us down to a single player screen too.

One other point that is not clear from the original spec: If Consumbles fall below zero, the player dies and is out of the game.
