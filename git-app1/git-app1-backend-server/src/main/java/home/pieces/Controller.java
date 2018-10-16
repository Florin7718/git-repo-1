package home.pieces;

import home.persist.ItemRepository;
import home.persist.PurchasedItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
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
}
