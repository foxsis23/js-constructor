export function row(context,style = ''){
    return `
        <div class="row" style="${style}">${context}</div>
    `;
}

export function col(context){
    return `
        <div class="col-sm">${context}</div>
    `;
}

export function css(styles = {}){
    if(typeof styles === 'string'){
        return styles;
    }

    const toString = key => `${key}: ${styles[key]}`;

    return Object.keys(styles).map(toString).join(';');

}

export function block(type){
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="value">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="styles">
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Add</button>
        </form>
        <hr/>
    `;
}

