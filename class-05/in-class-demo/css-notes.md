# CSS Notes

## Basic Rules of CSS

### How to incorporate CSS

* External Stylesheet - it's own separate file <-- BEST PRACTICE
* Internal Styles - right in the HTML document
* Inline STYLES - in the element itself

---

### Structure of a CSS Rule
```css
selector {property: value; property: value; property: value}
```

```css
selector {
  property: value;
  property: value;
  property: value;
}
```

Examples:

```css
* {
  background-color: red;
}

---------------------------

h1 {
  color: white;
}
```

---

### How to select elements

* By name

  * Example: find all `p` elements and apply this rule
    ```css
      p {
        color: purple;
      }
    ```

* By location
  * Example: find all the `li` elements inside `nav` elements and apply this rule
    ```css
    nav li {
      margin: 20px;
    }
    ```

* By element's ID name
  * Example: find any elements with the ID of `top-section` and apply this rule
    ```css
    #top-section {
      background-color: red;
    }
    ```

* By element's CLASS name
  * Example: find any elements with the CLASS of 'smaller' and apply this rule
    ```css
    .smaller {
      background-color: green;
    }
    ```

