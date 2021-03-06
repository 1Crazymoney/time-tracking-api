const validator = require('../../middleware/validators')
const project = require('./controller')

// export const baseUrl = '/users'
module.exports.baseUrl = '/projects'

module.exports.routes = [
  {
    method: 'POST',
    route: '/',
    handlers: [
      // Only admins can create a new project.
      validator.ensureAdmin,
      project.createProject
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
      // Only logged-in users can view projects.
      validator.ensureUser,
      project.getProjects
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      // Only logged-in users can get project details.
      validator.ensureUser,
      project.getProject
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      // Only admins can update projects.
      validator.ensureAdmin,
      project.getProject,
      project.updateProject
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      // Only admins can delete projects.
      validator.ensureAdmin,
      project.getProject,
      project.deleteProject
    ]
  }
]
