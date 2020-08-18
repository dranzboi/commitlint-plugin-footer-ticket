module.exports = function(parsed, when, value) {
    const footers = parsed.footer;

    if (!footers) {
        return [false, 'lastline is required'];
    }
    
    if (!value) {
        return [false, 'no regexp are specified'];
    }
    
    const new_line = /\n|\r\n|\r(?!\n)/;
    const negated = when === 'never';
    const report = [true, []];
    const arr_footer = footers.split(new_line);
    
    const f = arr_footer[arr_footer.length - 1];
    
    const has_match = (new RegExp(value)).test(f);
    
    if (report[0]) {
        report[0] = negated ? !has_match : has_match;
    }
    
    if (has_match === negated) {
        report[1].push('lastline is should be according pattern')
    }
  
    return report;
};
