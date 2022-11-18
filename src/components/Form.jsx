import React from 'react';

function Form () {
    return (
        <form>
            <input type="text" placeholder="your name" />
            <label>
          Pick your aimed duration to achieve your goal:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="1month">1-2 Month</option>
            <option value="3months">3 Months</option>
            <option value="6months">6 Months</option>
            <option value="9month">9 Months</option>
          </select>
        </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;
