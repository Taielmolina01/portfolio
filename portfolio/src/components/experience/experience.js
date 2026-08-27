class ExperienceClass {
    constructor(
        title,
        experienceItems,
    ) {
        this.title = title
        this.experienceItems = experienceItems
    }
}

class ExperienceItem {
    constructor(
        startDate,
        endDate, 
        role, 
        enterprise,
        description,
        stack 
        ) {
            this.startDate = startDate
            this.endDate = endDate
            this.role = role
            this.enterprise = enterprise
            this.description = description
            this.stack = stack
    }
}

export {ExperienceClass, ExperienceItem};