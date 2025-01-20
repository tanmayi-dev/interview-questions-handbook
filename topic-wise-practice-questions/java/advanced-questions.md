# Java

### Overloading vs Overriding

#### Overloading

Overloading is a term used to describe when two methods have the same name but differ in the type or number of arguments

```java
public double computeArea(Circle c) {...}
public double computeArea(Square s) {...}
```

#### Overriding - What is the output ? 

Overriding occurs when a method shares the same name and function signature as another method in its super class.

```java

public abstract class Shape {
  public void printMe() {
    System.out.println("I am a shape.");
  }
  public abstract double computerArea();
}

public class Circle extends Shape {
  private double rad = 5;
  public void printMe() {
    System.out.println("I am a circle.");
  }

  public double computeArea() {
    return rad * rad * 3.15;
  }
}

public class Ambiguous extends {
  private double area = 10;
  public double computeArea() {
    return area;
  }
}

public class IntroductionOverriding {
  public static void main(String[] args) {
    Shape[] shapes = new Shape[2];
    Circle circle = new Circle();
    Ambiguous ambiguous = new Ambiguous();

    shapes[0] = circle;
    shapes[1] = ambiguous;

    for (Shape s : shapes) {
      s.printMe();
      System.out.println(s.computeArea());
    }
  }
}

```

<details>
  <summary>Answer</summary>
  <p>
    
    I am a circle.
    78.75
    I am a shape.
    10.0

    Observe that Circle overrode printMe(), whereas Ambiguous just left this method as-is.
    
  </p>
</details>

### Collection Framework

Examples of Java Collection Framework : 

`ArrayList`: An `ArrayList` is a dynamically resizing array, which grows as you insert elements.
```java
ArrayList<String> myArr = new ArrayList<String>();
myArr.add("one");
myArr.add("two");
System.out.println(myArr.get(0)); /* prints <one> */
```

`Vector`: A `vector` is very similar to an `ArrayList`, except that it is synchronized. Its syntax is almost identical as well.
```java
Vector<String> myVect = new Vector<String>();
myVect.add("one");
myVect.add("two");
System.out.println(myVect.get(0));
```

`LinkedList`: `LinkedList` is, of course, Java's built-in `LinkedList` class. It demonstrates some of the syntax for an iterator.
```java
LinkedList<String> myLinkedList = new LinkedList<String>();
myLinkedList.add("two");
myLinkedList.addFirst("one");
Iterator<String> iter = myLinkedList.iterator();
while (iter.hasNext()) {
  System.out.println(iter.next());
}
```

`HashMap`: The `HashMap` collection is widely used, both in interviews and in the real world. We've provided a snippet of the syntax below.
```java
HashMap<String, String> map = new HashMap<String, String>();
map.put("one", "uno");
map.put("two", "dos");
System.out.println(map.get("one"));
```

