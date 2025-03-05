const express = require ('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout, 
    deleteWorkout,
    updateWorkout
    
} = require ('../controllers/workoutController')

const router = express.Router()

// Get all workouts

router.get('/' , getWorkouts)

// get a single workout

router.get('/:id' , getWorkout)
 
// post a new workouts 

router.post('/', createWorkout)

// delete a  single workouts
router.delete('/:id' , deleteWorkout)
 
// update a single workouts
router.patch('/:id' , updateWorkout)

module.exports = router;