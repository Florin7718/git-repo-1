package home.pieces;

import home.persist.ItemRepository;
import home.persist.PurchasedItem;
import home.persist.User;
import home.persist.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
public class Controller {

  private static final String template = "Hello, %s!";
  private final AtomicLong counter = new AtomicLong();
  private static final ArrayList<PurchasedItemModel> items = new ArrayList<>();

  @Autowired
  private ItemRepository itemRepository;

  @Autowired
  private UserRepository userRepository;

  @PostMapping("/api/add-purchase")
  public void addPurchase(@RequestBody PurchasedItemModel item) {
    PurchasedItem pi = new PurchasedItem();
    pi.setName(item.getName());
    pi.setPrice(item.getPrice());
    pi.setCurrency(item.getCurrency());
    pi.setDate(item.getDate());
    itemRepository.save(pi);
  }

  @GetMapping("/api/view-purchases")
  public PurchasedItemModel[] viewPurchases() {
    return StreamSupport
      .stream(itemRepository.findAll().spliterator(), false)
      .map(item -> {
        PurchasedItemModel pi = new PurchasedItemModel();
        pi.setName(item.getName());
        pi.setPrice(item.getPrice());
        pi.setCurrency(item.getCurrency());
        pi.setDate(item.getDate());
        return pi;
      }).collect(Collectors.toList())
      .toArray(new PurchasedItemModel[0]);
  }

  @PostMapping("/api/login")
  public LoggedInUserModel login(@RequestBody UserModel user) {
    Optional<User> first = StreamSupport
      .stream(userRepository.findAll().spliterator(), false)
      .filter(u -> (u.getLoginId().equals(user.getLoginId())) && (u.getPassword().equals(user.getPassword())))
      .findFirst();
    if (!first.isPresent()) {
      throw new RuntimeException("HttpStatus ?");
    }
    LoggedInUserModel loggedInUser = new LoggedInUserModel();
    loggedInUser.setName(first.get().getName());
    return loggedInUser;
  }

  @PostMapping("/api/register")
  public void register(@RequestBody UserModel user) {
    User u = new User();
    u.setName(user.getName());
    u.setLoginId(user.getLoginId());
    u.setPassword(user.getPassword());
    u.setCreationDate(new Timestamp(System.currentTimeMillis()));
    userRepository.save(u);
  }
}
