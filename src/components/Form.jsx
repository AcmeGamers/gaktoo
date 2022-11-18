import React from 'react';

function Form () {
    return (
        <form>
            <input type="text" placeholder="your name" />
            <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;
