import express from 'express';
const router = express.Router(); // creates a fresh router instance, stored in the variable router
import { v4 as uuidv4 } from 'uuid';

let users = [
    {
        first_name: 'Salma',
        last_name: "ibro",
        email: 'salm@gmail.com'
    },
    {
        first_name:'Hassan',
        last_name: 'ibro',
        email: 'hasun@gmail.com',
    },
];

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const {id } = req.params;
    const findId = users.find((user) => user.id === id);
    res.send(findId);
});

router.post('/', (req, res) =>{
    const user = req.body;
    users.push({...user, id: uuidv4()});
    res.send(`User with the name ${user.first_name} added to the database!`);
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {first_name, last_name, email} = req.body;
    const user = users.find((user) => user.id === id);
    if(!user) res.send('User not found');
    if(first_name) user.first_name = first_name;
    if(last_name) user.last_name = last_name;
    if(email) user.email = email;
    res.send(`User with the id ${id} has been updated`);

});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} has been deleted`);
});


export default router;