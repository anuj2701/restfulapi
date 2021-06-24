const express = require("express");
const router = new express.Router();
const Student = require("../models/students")

const studentRouter = require("../routers/students")
router.post("/students",async(req,res) => {

    try{
        const user = new Student(req.body);
        const createUser = await new user.save();
        res.status(201).send(createUser);
    }catch(e){ res.status(400).send(e);}

})

router.get("/students",async(req,res) => {
    try{
    
        const studentsData = await Student.find();
        res.send(studentsData);
        pretty=true;


        // if(!studentData){
        //     return res.status(404).send();

        // }else{
        //     res.send(studentData);   
        // }
    }catch(e){
        res.send(e);
    }
})

router.get("/students/:id",async(req,res) => {
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);


        if(!studentData){
            return res.status(404).send();

        }else{
            res.send(studentData);   
        }
    }catch(e){
        res.status(500).send(e);
    }
})

router.patch("/students/:id" , async(req,res) => {
    try{
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id , req.body ,{
        new: true

    });
        res.send(updateStudents)
        

    }catch(e){
        res.status(404).send(e);
    }
 
})

router.delete("/students/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const deleteStudents = await Student.findByIdAndDelete(_id);
        res.send(deleteStudents)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router;