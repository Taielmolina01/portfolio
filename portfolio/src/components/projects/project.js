class ProjectClass {
    constructor(
        name,
        description,
        stack,
        links,
    ) {
        this.name = name
        this.description = description
        this.stack = stack
        this.links = links
    }
}

class ProjectSection {
    constructor(
        title,
        subtitle,
        projects
    ) {
        this.title = title
        this.subtitle = subtitle
        this.projects = projects
    }
}

export {ProjectClass, ProjectSection};