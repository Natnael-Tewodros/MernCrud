const express = require ('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout
    
} = require ('../controllers/workoutController')

const router = express.Router()

// Get all workouts

router.get('/' , getWorkouts)

// get a single workout

router.get('/:id' , getWorkout)
 
// post a new workouts 

router.post('/', createWorkout)

// delete a  single workouts
router.delete('/:id' , (req , res ) => {
    res.json( {mssg: 'delete a single  workouts'})
})
 
// update a single workouts
router.patch('/:id' , (req ,res) => {
    res.json( {mssg: 'update a single  workouts'})
})

module.exports = router