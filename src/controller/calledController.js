const CalledModel = require('../model/calledModel');
const database = require('../../config/connectionDB');
database.sync();

class CalledController {
    async createCalled (req, res) {
        try {
           const { id, idCustomer, idEmployee, creationDate, closingDate, titleCalled, problem, solution, description, priority, statusCalled, isActive } = req.body;
           const newCalled = await CalledModel.create({id, idCustomer, idEmployee, creationDate, closingDate, titleCalled, problem, solution, description, priority, statusCalled, isActive});
           return res.status(201).json(newCalled);
        } catch (error) {
            return res.status(500).json({error: 'Error creating called'});
        };
    };

    async getAllCalleds (req, res) {
        try {
           const called = await CalledModel.findAll();
           return res.status(200).json(called);
        } catch (error) {
            return res.status(500).json({error: 'Error getting called'});
        };
    };
    
    async getCalledById (req, res) {
        try {
            const {id} = req.params;
            const called = await CalledModel.findByPk(id);
            if(!called) {
                return res.status(404).json({error:'Not found.'});
            };
        } catch (error) {
            return res.status(500).json({error: 'Error getting called'});
        };
    };

    async updateCalled (req, res) {
        try {
            const {idCalled} = req.params;
            const { id, idCustomer, idEmployee, creationDate, closingDate, titleCalled, problem, solution, description, priority, statusCalled, isActive } = req.body; 
            const called = await CalledModel.findById(idCalled);
            if (!called) {
                return res.status(404).json({error: 'The called not found'});
            };
            await called.update({id, idCustomer, idEmployee, creationDate, closingDate, titleCalled, problem, solution, description, priority, statusCalled, isActive});
        } catch (error) {
            return res.status(500).json({error: 'Error update called'});
        };
    };

    async deleteCalled (req, res) {
        try {
            const {id} = req.params;
            const called = await CalledModel.findById(id);
            if (!called) {
                return res.status(404).json({error: 'The called not found'});
            };
            await called.destroy();
            await res.status(204).json();
        } catch (error) {
            return res.status(500).json({error: 'Error deleting called'});
        };
    };

};

module.exports = CalledController;