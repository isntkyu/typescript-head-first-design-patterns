- 디자인원칙:요구사항마다 달라지는 부분을 찾아서 나머지 코드에 영향을 주지 않도록 캡슐화.

- 구현보다 인터페이스에 맞춰 프로그래밍 한다.

- 상위형식에 맞춰 프로그래밍.

```java
Dog d = new Dog();
d.bark();

//

Animal animal = new Dog();
animal.makeSound();

//

a = getAnimal();
a.makeSound();
```

- 상속보다 구성활용
