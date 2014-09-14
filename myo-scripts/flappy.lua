scriptId = 'com.thalmic.examples.outputeverything'
 
function rock()
myo.keyboard("r", "press")
end
function paper()
myo.keyboard("p", "press")
end
function scissors()
myo.keyboard("s", "press")
end

-- function up()
-- myo.keyboard("up_arrow", "press")
-- end

-- function down()
--   myo.keyboard("down_arrow", "press")
-- end

-- function left()
--   myo.keyboard("left_arrow", "press")
-- end

-- function right()
--   myo.keyboard("right_arrow", "press")
-- end
 
function onPoseEdge(pose, edge)
  -- myo.debug("edge: " .. edge)
  pitch = myo.getPitch()
  myo.debug("pitch: " .. pitch)

  myo.debug("onPoseEdge: " .. pose .. ", " .. edge)
  if -0.25 < pitch and pitch < 0.25 and pose == "fist" then
    myo.debug("space")
    myo.keyboard("space", "press")
  end
  -- if pitch > 0.75 then
  --   up()
  -- elseif pitch < 0.25 then
  --   down()
  -- end
  
  -- myo.debug("onPoseEdge: " .. pose .. ", " .. edge)
  -- if pose == "fingersSpread" then
  --   paper()
  -- elseif pose == "fist" then
  --   rock()
  -- elseif pose == "waveIn" then
  --   scissors()
  -- elseif pose == "waveOut" then
  --   right()
  -- end
end
 
function onPeriodic()
end
 
function onForegroundWindowChange(app, title)
myo.debug("onForegroundWindowChange: " .. app .. ", " .. title)
return true
end