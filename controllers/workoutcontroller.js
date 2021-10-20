const Express = require("express");
const { logModel } = require("../models");
const validateJWT = require("../middleware/validate-jwt");
const router = Express.Router()
const { restart } = require("nodemon");

//gets log info from database 
router.get("/", validateJWT, async (req, res) => {
  let {id} = req.user
  try { 
     const Userlogs = await logModel.findall ({ 
       where:{ 
         owner_id
       }
     })
     res.status(200).json(Userlogs)
  } catch (err){
   res.status(500).json({ 
     error:err
   })
  }
});

//gets log by user 
router.get("/", validateJWT, async (req, res) => {
  let {id} = req.user
  try { 
     const Userlogs = await logModel.findone ({ 
       where:{ 
         owner_id
       }
     })
     res.status(200).json(Userlogs)
  } catch (err){
   res.status(500).json({ 
     error:err
   })
  }
//updates logs in the database 
router.put("/:id", validateJWT, async (req, res) => {
    const { description, defintion, result } = req.body.log;
    const userid = req.params.entryId; 
    const owner_id = req.user.id; 

    const entry = {
      where: { 
        id: logId, 
        owner_id: ownerId 
      } 
    }; 

      const logUpdate = { 
        description: description, 
        defintion: defintion, 
        result: result 
      } 
      try { 
        const logUpdate = await logModel.update(logUpdate,entry); 
        res.status(200).json({ 
         message: "success!",
         log_id: logId,
         updated_log: updatedLog }); 
        } catch (err) {
          res.status(500).json({error:err}); 
        } 
}); 


 //posts user info into the log/databse 
router.post("/log", validateJWT, async (req, res) => {
  const  logpost = await logModel.findOne(logpost,log_id);
    const log = {
      
          where: {
               id: logId, 
               owner_id: ownerId 
          },
      };
  if (logpost) {
   res.status(200).json({
              user: loginUser,
              message: "workout succesfully logged!"
            });
  } else {
              res.status(401).json({
                message: 'post failed',
            });
         };
        }catch (err){
            res.status(500).json({
              message: "Failed to post workout"
            })
          }
  });
  
  router.delete("/delete/:id", validateJWT, async (req, res) => {
    const ownerId = req.user.id; 
    const logId = req.params.id; 
    
    try { 
      const entry = { 
        where: { 
          owner_id: ownerId, 
          id: logId
        }
      }
    }

  }; 

module.exports = router;
