// Templates are now auto-discovered from the file system
// No manual exports needed - they're dynamically imported by the auto-registry
// 
// Template files in this directory are automatically:
// 1. Discovered by scanning src/templates/
// 2. Registered with ID pattern: {category}-{filename}
// 3. Imported on-demand using dynamic imports
//
// To add a new template:
// 1. Create a .tsx file in the appropriate category folder
// 2. Export a React component (default export preferred)
// 3. The template will be automatically available!

export { }; // Make this a module