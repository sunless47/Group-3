package Group.three.Backend.service;
import Group.three.Backend.entity.User;
import java.util.List;


public interface UserService {
    User createUser(User user);

    User getUserById(Integer userId);

    List<User> getAllUsers();

    User updateUser(User user);

    void deleteUser(Integer userId);
}
