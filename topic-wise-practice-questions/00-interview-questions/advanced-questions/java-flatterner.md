# Java Flattener

[Gist Link](https://gist.github.com/huchengming/d868320693b0283f0885b639b806df19)

```java
import java.util.LinkedList;
import java.util.List;

@SuppressWarnings("unchecked")
public class Flattener {
  private List all = null;

  public Flattener() {
    all = new LinkedList();
  }

  public void add (List i) {
    all.add(i);
  }

  public List doIt(int lm) {
    int count = 0;
    List r = new LinkedList();
    for (Object y : all) {
      if (y == null)
        continue;
      if (y instanceof List) {
        count += addFlattened(r, (List) y);
      } else {
        r.add(y);
        count += 1;
      }
    }
    if (count > lm)
      throw new RuntimeException("Too many items");

    return r;
  }

  public int addFlattened(List r, List input) {
    int c = 0;

    for (int i = 0; i < input.size(); ++i) {
      if (input.get(i) instanceof List)
        c += addFlattened(r, (List) input.get(i));
      else if (input.get(i) != null) {
        c += 1;
        r.add(input.get(i));
      }
    }

    return c;
  }
}
```
