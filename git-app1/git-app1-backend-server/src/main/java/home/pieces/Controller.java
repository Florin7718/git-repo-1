package home.pieces;

import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import home.persist.ItemRepository;
import home.persist.PurchasedItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {

  private static final String template = "Hello, %s!";
  private final AtomicLong counter = new AtomicLong();
  private static final ArrayList<PurchasedItemModel> items = new ArrayList<>();

  @Autowired
  private ItemRepository itemRepository;

  @PostMapping("/api/add-purchase")
  public void  addPurchase(@RequestBody PurchasedItemModel item) {
    PurchasedItem pi = new PurchasedItem();
    pi.setName(item.getName());
    pi.setPrice(item.getPrice());
    pi.setCurrency(item.getCurrency());
    pi.setDate(item.getDate());
    itemRepository.save(pi);
//    items.add(item);
  }

  @GetMapping("/api/view-purchases")
  public PurchasedItemModel[] viewPurchases() {
//    return items.toArray(new PurchasedItemModel[0]);
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

//  static{
//    {
//      PurchasedItemModel item = new PurchasedItemModel();
//      item.setName("controller name");
//      item.setCurrency("controller $");
//      item.setDate("4.10.2018");
//      item.setPrice("500");
//      items.add(item);
//    }
//    {
//      PurchasedItemModel item = new PurchasedItemModel();
//      item.setName("controller name 2");
//      item.setCurrency("controller $");
//      item.setDate("4.10.2018");
//      item.setPrice("500");
//      items.add(item);
//    }
//  }
}
